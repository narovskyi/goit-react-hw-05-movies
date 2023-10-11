import { styled } from "styled-components";
import noImage from '../../images/no-image.jpg';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
`;

export const FlexContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    display: block;
    margin-right: 30px;
    border-radius: 10px;
    box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.5);
    min-width: 300px;
    min-height: 450px;
    background-image: url(${noImage});
    background-size: cover;
`;

export const Title = styled.h1`
    color: #190530;
`;

export const Overview = styled.p`
    max-width: 450px
`;

export const Subtitle = styled.span`
    color: #190530;
    font-weight: 700;
    font-size: 18px;
    margin-right: 5px;
`;

export const Highlight = styled.span`
    display: inline-block;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: 700;
    color: #fceaff;
    background-color: #190530;
    &:not(:last-child) {
        margin-right: 10px;
    }
    margin-bottom: 5px;
`;

export const Paragraph = styled.p`
    line-height: 25px;    
`;

export const InformationLink = styled(NavLink)`
    color: red;
`;