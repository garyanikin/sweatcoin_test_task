import React from 'react';
import {connect} from 'react-redux';
import {ACTION_TYPES} from "./store";

function StatementList(props) {

    /**
     * Создаёт список statement'ов
     * @returns {Array}
     */
    var createStatementList = () => {
        let list = [];
        let statements_length = props.list.length;

        for (let i = 0; i < statements_length; i++) {
            var removeStatement = () => {props.removeStatement(i)};
            var statement = props.list[i].split(' ');
            var fisrt_word = statement.shift();

            list.push(<div className="statement-container__item" key={`item_${i}`}>
                <span><b>{fisrt_word}</b> · {statement.join(' ')}</span>
                <div className="item__remove" onClick={removeStatement}/>
                </div>)
        }

        return list;
    };

    /**
     * Обработка нажатий клавиш в input'е
     * @param e
     */
    var onKeyUp = (e) => {
        if (e.target.value && e.key === 'Enter') {
            props.addStatement(e.target.value);
            e.target.value = '';
        }
    };

    return (
        <div>
            <div className="statement-container">
                {createStatementList()}
            </div>
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