import styled from "styled-components";
import noImage from '../../images/no-image.jpg';

export const Card = styled.li`
    display: flex;
    text-align: center;
    margin: 15px;
    flex-direction: column;
    flex-basis: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.28);
`;

export const Name = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;
    font-weight: 700;
    color: #190530;
`;

export const Character = styled.p`
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 500;
    color: #968299;
`;

export const Image = styled.img`
    display: block;
    min-width: 200px;
    min-height: 300px;
    background-image: url(${noImage});
    background-size: cover;
`;