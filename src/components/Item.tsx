import React from "react";
import {SortableElement} from "react-sortable-hoc";
import styled from "styled-components";

interface ItemProps {
    statement: string;
    removeStatement: any;
    className?: any;
}

const Item = SortableElement((props: ItemProps) => {
    let statement = props.statement.split(' ');
    let fisrt_word = statement.shift();

    return (
        <div className={props.className}>
            <Value><b>{fisrt_word}</b> · {statement.join(' ')}</Value>
            <ItemRemove onClick={props.removeStatement}/>
        </div>
    );
});

const Value = styled.span`
    max-width: 260px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
`;

const ItemRemove = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 11px;
    background: url("/close.svg") no-repeat;
    width: 18px;
    height: 18px;
    cursor: pointer;
`;

const StyledItem = styled(Item)`
    margin-bottom: 16px;
    position: relative;
    background: #F2F4F6;
    border: 2px solid #B6C0CD;
    font-family: Helvetica;
    font-size: 15px;
    color: #173F61;
    letter-spacing: 0.12px;
    outline: none;
    padding: 13px 17px 11px;
    width: 276px;
    
    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 12px;
      width: 12px;
      height: 19px;
      background: url("/move.svg") no-repeat;
      cursor: move;
    }
`;

export default StyledItem;