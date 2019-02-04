import React from "react";
import styled from "styled-components";

interface Add {
    onKeyUp: any;
    className?: any;
}

function Add({onKeyUp, className}: Add) {
    return (<div className={className}>
        <Input onKeyUp={onKeyUp} type="text"/>
        <Caption>Add a statement <Icon>+</Icon></Caption>
    </div>);
}

const Icon = styled.span`
    opacity: 0.3;
    font-size: 20px;
`;

const Caption = styled.span`
    background: rgba(247,247,247,0.40);
    border: 2px solid rgba(187,193,199,0.25);
    font-family: Helvetica;
    font-size: 15px;
    color: #949EA9;
    letter-spacing: 0.12px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 310px;
    height: 100%;
    pointer-events: none;
    border-style: dashed;
`;

const Input = styled.input`
    background: #F2F4F6;
    border: 2px solid #B6C0CD;
    font-family: Helvetica;
    font-size: 15px;
    color: #173F61;
    letter-spacing: 0.12px;
    outline: none;
    padding: 13px 17px 11px;
    width: 276px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    
    :focus {
        opacity: 1;
        cursor: text;
    }
    
    :focus + span {
        opacity: 0;
    }
`;

const StyledAdd = styled(Add)`
    position: relative;
    width: 314px;
    height: 42px;
    line-height: 42px;
`;

export default StyledAdd;