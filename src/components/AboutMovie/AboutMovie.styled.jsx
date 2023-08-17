import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 30px;
`;

export const Image = styled.img`
    display: block;
    margin-right: 30px;
    border-radius: 10px;
    // box-shadow: 0px 0px 14px 4px rgba(160,108,217,0.5);
    box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.5);
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
`;

export const Paragraph = styled.p`
    line-height: 25px;
`;