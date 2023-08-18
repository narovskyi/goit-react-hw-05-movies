import { useEffect, useState } from "react";
import { Container, Title } from "./TrendingMovies.styled";
import MoviesList from "components/MoviesList";

export default function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (!response.success) {
                    setIsError(response.status_message);                   
                }
                setTrendingMovies(response.results);
            })
            .catch(err => {
                console.log(err);
                setIsError(err);
            });
    }, [])

    return (
        <Container>
            <Title>Trending Today</Title>
            {trendingMovies && <MoviesList path={`movies/`} movies={trendingMovies} />}
            {isError && <Title>Sorry, something went wrong...</Title>}
        </Container>
    );
}