import React, { useState } from 'react';
import ListItem from './ListItem';
import Button from './Button';

type Theme = {
    background: string,
    foreground: string,
    opacity: string
}

type ListContent = {
    title: string,
    content: string | undefined,
    due_date: string | undefined,
    notes: string | undefined,
    collapsed: boolean,
    children: ListContent[] | false
}

type ListInfo = {
    header: string,
    description: string | undefined,  
    items: ListContent[],
    theme: Theme
};

const List: React.FC<ListInfo> = ( {header, description, items, theme} ) => {
    const [listItems, collapseListItems] = useState<ListContent[]>(items);
    const themeStyle: string = theme.foreground.concat(" ").concat(theme.opacity);

    const collapseChild = (children: ListContent[], child: ListContent): ListContent[] => {
        return children.map((item) => {return (
            {
                ...item, 
                collapsed: (item === child 
                    ? !item.collapsed 
                    : item.collapsed)
            }
        )});
    }

    const handleCollapseClick = (): void => {
        collapseListItems(() => listItems.map(
            (item) => {return ( {...item, collapsed: true} )}
        ));
    };

    const showChildrenClick = (item_to_change: ListContent): void => {
        collapseListItems(() => collapseChild(listItems, item_to_change));
    };

    return (
        <div className={`p-2 pr-0 rounded-lg ${theme.background}`}>
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">{header}</h1>
                    <Button 
                        onClick={() => {handleCollapseClick()}} 
                        className={`text-xs  ${themeStyle}`}
                    >
                        Collapse All
                    </Button>
                </div>
                <p>{description}</p>
            </div>
            {listItems?.map((item) => {return (
                <ListItem
                    list_content={item}
                    theme={theme}
                    handleCollapseClick={handleCollapseClick}
                    showChildrenClick={showChildrenClick}
                    collapseChild={collapseChild}
                />
            )})}
        </div>
    )
}

export { type ListInfo, type Theme, type ListContent };
export default List;