import styled from "styled-components";

export const Container = styled.div`
    
`;

export const SearchButton = styled.button`
    display: block;
    border-right: none;
    background-color: #fceaff;
    border-radius: 10px 0px 0px 10px;
    border: 3px solid #a06cd9;
    border-right: none;
    cursor: pointer;
    svg {
        display: block;
        height: 30px;
        width: 30px;
        color: #190530;
        &:active {
            color: #a06cd9;
        }
    }
    
`;

export const Input = styled.input`
    font-size: 20px;
    color: #190530;
    height: 40px;
    width: 300px;
    border-radius: 0px 10px 10px 0px;
    border: 3px solid #a06cd9;
    border-left: none;
    background-color: #fceaff;
    &:focus-visible {
        outline: none;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;