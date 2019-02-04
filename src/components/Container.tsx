import React from "react";
import {connect} from "react-redux";
import {ACTION_TYPES} from "../store";
import {arrayMove} from "react-sortable-hoc";
import {List} from "./List";
import {default as Add} from "./Add";

interface ContainerProps {
    sortList: any;
    addStatement: any;
    list: any;
    removeStatement: any;
}

function Container(props: ContainerProps) {

    /**
     * Сортирует массив согласно изменениям после drag'n'drop
     * @param oldIndex
     * @param newIndex
     */
    const onSortEnd = ({oldIndex, newIndex}: { oldIndex: number, newIndex: number }) => {
        props.sortList(arrayMove(props.list, oldIndex, newIndex));
    };


    /**
     * Обработка нажатий клавиш в input'е
     * @param e
     */
    const onKeyUp = (e: any) => {
        if (e.target.value && e.key === 'Enter') {
            props.addStatement(e.target.value);
            e.target.value = '';
        }
    };

    return (
        <div>
            <List distance={1} list={props.list} onSortEnd={onSortEnd}
                  removeStatement={props.removeStatement}/>
            <Add onKeyUp={onKeyUp}/>
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        sortList: (sorted_list: string[]) => {
            dispatch({
                type: ACTION_TYPES.SORT_LIST,
                list: sorted_list
            });
        },
        addStatement: (statement: string) => {
            dispatch({
                type: ACTION_TYPES.ADD_STATEMENT,
                value: statement
            })
        },
        removeStatement: (id: number) => {
            dispatch({
                type: ACTION_TYPES.REMOVE_STATEMENT,
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);