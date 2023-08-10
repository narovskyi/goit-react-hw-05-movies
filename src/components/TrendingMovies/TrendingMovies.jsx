import { useEffect, useState } from "react";
import { Container, FilmCard, List, StyledLink, Title, MovieTitle, Image } from "./TrendingMovies.styled";

export default function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setTrendingMovies(response.results);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <Container>
            <Title>Trending Today</Title>
            <List>
                {trendingMovies && trendingMovies.map(({ title, id, poster_path }) => (
                    <FilmCard key={id}>
                        <StyledLink to={`movies/${id}`}>
                            <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                        </StyledLink>
                        <StyledLink to={`movies/${id}`}><MovieTitle>{title}</MovieTitle></StyledLink>
                    </FilmCard>))}
            </List>
        </Container>
    );
}