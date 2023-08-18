import MovieFinder from "components/MovieFinder";
import MoviesList from "components/MoviesList";
import { useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState();

    return (
        <>
            <MovieFinder setMovies={setMovies} />
            {movies && <MoviesList path={''} movies={movies} />}
        </>
    );
}