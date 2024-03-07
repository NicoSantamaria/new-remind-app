import React, { useState } from "react";
import Button from "./Button";
import { Theme, ListContent } from "./List";
import NewItem from "./NewItem";
import TextArea from "./TextArea"
import { 
    VscAdd,
    VscChevronDown,
    VscChevronRight,
    VscFoldDown,
    VscFoldUp,
    VscEdit,
    VscDash,
    VscCheck
} from "react-icons/vsc";

type ListProps = {
    list_content: ListContent,
    theme: Theme,
    handleCollapseClick: () => void,
    showChildrenClick: (arg: ListContent) => void,
    collapseChild: (arg1: ListContent[], arg2: ListContent) => ListContent[]
}

const ListItem: React.FC<ListProps> = ( {
    list_content,
    theme,
    handleCollapseClick,
    showChildrenClick,
    collapseChild
}) => {
    const [children, collapseChildren] = useState<ListContent[] | false>(list_content.children)
    const [expand, setExpand] = useState<boolean>(false);
    const [showButtons, setShowButtons] = useState<boolean>(false);
    const [editActive, setEditActive] = useState<boolean>(false);
    const [newActive, setNewActive] = useState<boolean>(false);

    const themeStyle: string = theme.foreground.concat(" ").concat(theme.opacity);

    const handleCollapseChildren = (item_to_change: ListContent): void => {
        if (children !== false) {
            collapseChildren(() => collapseChild(children, item_to_change));
        }
    }

    return (
        <div className={`p-1 ml-2 border-l-2 border-black pr-0 text-sm ${themeStyle}`}>
            <div 
                className="flex flex-row justify-between items-center"
                onMouseOver={() => setShowButtons(true)}
                onMouseLeave={() => setShowButtons(false)}
            >
                <div onClick={() => showChildrenClick(list_content)} className="mx-2 hover:cursor-pointer">
                    {children === false 
                        ? "" 
                        : list_content.collapsed 
                            ? <VscChevronRight /> 
                            : <VscChevronDown />
                    }
                </div>

                <div className="w-full">
                    {editActive
                        ? <>
                            <TextArea 
                                placeholder_text={list_content.title}
                                className="line-clamp-1 h-2"
                                rows={1}
                            />
                            <TextArea
                                placeholder_text={
                                    list_content.content 
                                        ? list_content.content 
                                        : "Description"
                                }
                                className=""
                                rows={2}
                            />
                            <TextArea
                                placeholder_text={
                                    list_content.notes 
                                        ? list_content.notes 
                                        : "Notes"
                                }
                                className=""
                                rows={3}
                            />
                            <TextArea
                                placeholder_text={
                                    list_content.due_date 
                                        ? list_content.due_date 
                                        : "Date"
                                }
                                className=""
                                rows={1}
                            />
                        </>
                        : <>
                            <p className="font-bold line-clamp-1">
                                {list_content.title}
                            </p>
                            <p className="line-clamp-1">
                                {list_content.content}
                            </p>
                        </>
                    }
                </div>

                <div className="flex flex-row w-[125px] justify-between items-center font-bold text-xs">
                    {showButtons && !editActive
                        ? <>
                            <Button 
                                onClick={() => setNewActive(!newActive)}
                                className={`${theme.background}`}
                            >
                                {newActive ? <VscDash /> : <VscAdd />}
                            </Button>
                            <Button
                                onClick={() => setExpand(!expand)}
                                className={`${theme.background}`}
                            >
                                {expand ? <VscFoldUp /> : <VscFoldDown />}
                            </Button>
                            <Button 
                                onClick={() => setEditActive(!editActive)}
                                className={`${theme.background}`}
                            >
                                <VscEdit />
                            </Button>
                            <Button 
                                onClick={() => null} 
                                className={`${theme.background}`}
                            >
                                <VscCheck />
                            </Button>
                        </> 
                        : null
                    }
                </div>
            </div>

            {newActive ? <NewItem /> : null}

            <div className={
                `${editActive ? "flex flex-row items-end" : ""}`
                }
            >
                {expand && !editActive
                    ? <div>
                        <p className="italic text-sm">{list_content.notes}</p>
                        <p className="text-sm text-right">{list_content.due_date}</p> 
                    </div>
                    : editActive
                        ? <div className="">
                            test
                        </div>
                        : null
                }
            </div>

            {(children === false) || (list_content.collapsed)
                ? null
                : children?.map((child) => {return (
                        <ListItem
                            list_content={child}
                            theme={theme}
                            handleCollapseClick={handleCollapseClick}
                            showChildrenClick={handleCollapseChildren}
                            collapseChild={collapseChild}
                        />
                    )})
            }
        </div>
    );
};

export { type ListProps };
export default ListItem;