import React from 'react';
import '../output.css';

type TextAreaProps = {
    placeholder_text: string
    className: string
    rows: number
}

const TextArea: React.FC<TextAreaProps> = ( {placeholder_text, className, rows} ) => {
    return (
        <div className={`${className} text-inherit w-full h-2`}>
            <textarea 
                placeholder={placeholder_text}
                className={`rounded-md p-1 text-inherit w-full`}
                rows={rows}
            />
        </div>
    );
}

export default TextArea;