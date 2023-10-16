import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
    padding: 20px 0;
    font-size: 20px;
    background-color: #a06cd9;
`;

export const Navigation = styled.nav`
    display: flex;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 100px;
`;

export const StyledLink = styled(NavLink)`
    color: #190530;
    font-size: 25px;
    text-decoration: none;
    &:not(:last-child) {
        margin-right: 20px;
    }
    &.active {
        font-weight: 700;
        color: #fceaff;
    }
`;