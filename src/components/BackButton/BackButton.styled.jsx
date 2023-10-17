import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(NavLink)`
    display: inline-block;
    font-weight: 700;
    color: #190530;
    margin-top: 20px;
    text-decoration: none;
    border: 3px solid #190530;
    border-radius: 5px;
    padding: 6px 12px;
    svg {
        vertical-align: bottom;
        margin-right: 6px;
    }
    transition-duration: 300ms;
    &:hover { 
        box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.28);
    }
    &:active {
        background-color: #9c7cbf;
    }
`;