import { styled } from "styled-components";
import { Link } from "react-router-dom";
import noImage from '../../images/no-image.jpg';

export const Image = styled.img`
    display: block;
    min-width: 200px;
    min-height: 300px;
    background-image: url(${noImage});
    background-size: cover;
`;

export const MovieTitle = styled.h3`
    text-align: center;
    margin: 0px;
    padding: 16px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -15px; 
    list-style: none;
`;

export const StyledLink = styled(Link)`
    color: #190530;
    font-size: 15px;
    text-decoration: none;
    line-height: 25px;
`;

export const FilmCard = styled.li`
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-basis: 200px;
    border-radius: 10px;
    overflow: hidden;
    transition-duration: 300ms;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 1px 6px 0px rgba(25,5,48,0.28);
    }
`;