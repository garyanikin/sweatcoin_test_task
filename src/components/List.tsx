import React from "react";
import {SortableContainer} from "react-sortable-hoc";
import {default as Item} from "./Item";

interface ListProps {
    list: any;
    removeStatement: any;
}

export const List = SortableContainer(({list, removeStatement}: ListProps) => {
    return (
        <div className="statement-container">
            {list.map((statement: string, index: number) => {
                let remove = () => {
                    removeStatement(index);
                };

                return (<Item key={`item-${index}`} index={index} removeStatement={remove}
                                      statement={statement}/>)
            })}
        </div>
    );
});