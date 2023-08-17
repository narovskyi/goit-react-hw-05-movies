import { useState } from "react";
import MoviesList from 'components/MoviesList'

export default function MovieFinder() {
    const [findingMovie, setFindingMovie] = useState();
    const [movies, setMovies] = useState();

    const handleInputChange = (e) => {
        setFindingMovie(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">
                    <>Search</>
                </button>

                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={findingMovie}
                    onChange={handleInputChange}
                />
            </form>
            <MoviesList movies={movies} />
        </>
    );
}