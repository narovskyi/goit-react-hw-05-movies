import { FilmCard, List, StyledLink, MovieTitle, Image } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
    return (
        <>
            {movies &&
                <List>
                    {movies.map(({ title, id, poster_path }) => (
                        <FilmCard key={id}>
                            <StyledLink to={`movies/${id}`}>
                                <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                            </StyledLink>
                            <StyledLink to={`movies/${id}`}><MovieTitle>{title}</MovieTitle></StyledLink>
                        </FilmCard>
                    ))}
                </List>
            }
        </>
    );
}