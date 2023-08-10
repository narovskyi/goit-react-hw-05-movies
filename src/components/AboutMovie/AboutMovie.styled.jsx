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
    box-shadow: 0px 0px 14px 4px rgba(160,108,217,0.5);
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
`;

export const VoteAverage = styled.span`
    display: inline-block;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: 700;
    color: #fceaff;
    background-color: #190530;
`;