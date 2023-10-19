import { useLocation } from "react-router-dom";
import { FilmCard, List, StyledLink, MovieTitle, Image } from "./MoviesList.styled";
import PropTypes from 'prop-types';

export default function MoviesList({ movies, path }) {
    const location = useLocation();

    // console.log(location);
    return (
        <>
            {movies &&
                <List>
                    {movies.map(({ title, id, poster_path }) => (
                        <FilmCard key={id}>
                            <StyledLink to={`${path}${id}`} state={{from: location }}>
                                <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                            </StyledLink>
                            <StyledLink to={`${path}${id}`} state={{ from: location }}><MovieTitle>{title}</MovieTitle></StyledLink>
                        </FilmCard>
                    ))}
                </List>
            }
        </>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired
};