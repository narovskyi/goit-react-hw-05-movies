import styled from "styled-components";

export const ReviewList = styled.ul`
    list-style: none;
`;

export const Review = styled.li`
    color: #190530;
    padding: 25px 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.28);
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Author = styled.p`
    margin: 0px 0px 16px 0px;
    font-weight: 700;
    font-size: 18px;
`;

export const Content = styled.p`
    margin: 0px;
`;

export const Notification = styled.h3`
    text-align: center;
    color: #190530;
`;