import React from "react";
import List, { type ListInfo } from "../components/List";
import test_data from "../utils/testdata";

const Reminders: React.FC = () => {
    const lists: ListInfo[] = test_data;

    return (
        <div className="w-2/3 h-[100%] flex flex-row gap-2">
            {lists?.map((list) => {return (
                <List
                    header={list.header}
                    description={list.description}
                    items={list.items}
                    theme={list.theme}
                />
            )})}
        </div>
    );
};

export default Reminders;