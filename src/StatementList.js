import React from 'react';
import {connect} from 'react-redux';
import {ACTION_TYPES} from "./store";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement((props) => {
    let statement = props.statement.split(' ');
    let fisrt_word = statement.shift();

    return (
        <div className="statement-container__item">
            <span><b>{fisrt_word}</b> · {statement.join(' ')}</span>
            <div className="item__remove" onClick={props.removeStatement}/>
        </div>
    );
});

const SortableList = SortableContainer(({list, removeStatement}) => {
    return (
        <div className="statement-container">
            {list.map((statement, index) => {
                let remove = () => {
                    removeStatement(index);
                };

                return (<SortableItem key={`item-${index}`} index={index} removeStatement={remove}
                                      statement={statement}/>)
            })}
        </div>
    );
});


function StatementList(props) {

    /**
     * Сортирует массив согласно изменениям после drag'n'drop
     * @param oldIndex
     * @param newIndex
     */
    const onSortEnd = ({oldIndex, newIndex}) => {
        props.sortList(arrayMove(props.list, oldIndex, newIndex));
    };


    /**
     * Обработка нажатий клавиш в input'е
     * @param e
     */
    const onKeyUp = (e) => {
        if (e.target.value && e.key === 'Enter') {
            props.addStatement(e.target.value);
            e.target.value = '';
        }
    };

    return (
        <div>
            <SortableList distance={1} list={props.list} onSortEnd={onSortEnd}
                          removeStatement={props.removeStatement}/>

            <div className="add-statement">
                <input onKeyUp={onKeyUp} type="text"/>
                <span>Add a statement <span className="add-statement__icon">+</span></span>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sortList: (sorted_list) => {
            dispatch({
                type: ACTION_TYPES.SORT_LIST,
                list: sorted_list
            });
        },
        addStatement: (statement) => {
            dispatch({
                type: ACTION_TYPES.ADD_STATEMENT,
                value: statement
            })
        },
        removeStatement: (id) => {
            dispatch({
                type: ACTION_TYPES.REMOVE_STATEMENT,
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementList);