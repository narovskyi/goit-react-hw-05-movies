import { FilmCard, List, StyledLink, MovieTitle, Image } from "./MoviesList.styled";

export default function MoviesList({ movies, path }) {
    console.log(movies);
    return (
        <>
            {movies &&
                <List>
                    {movies.map(({ title, id, poster_path }) => (
                        <FilmCard key={id}>
                            <StyledLink to={`${path}${id}`}>
                                <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                            </StyledLink>
                            <StyledLink to={`${path}${id}`}><MovieTitle>{title}</MovieTitle></StyledLink>
                        </FilmCard>
                    ))}
                </List>
            }
        </>
    );
}