import { useEffect, useState } from "react";
import { BorderWrap, Input, SearchButton, SearchForm } from "./MovieFinder.styled";
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';

export default function MovieFinder({ setMovies }) {
    const [movieTitle, setMovieTitle] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query"));

    const handleInputChange = (e) => {
        setMovieTitle(e.target.value);
        setSearchParams({ query: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(movieTitle.trim());
    }
    useEffect(() => {
        if (query === undefined || query === '' || query === null) {
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6e502cbaaa880d060a13b6a3192abd0&query=${query}&include_adult=false&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
            })
            .catch(err => {
                console.log(err);
            });

    }, [query, setMovies])


    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
                <BorderWrap>
                    <SearchButton type="submit">
                        <AiOutlineSearch />
                    </SearchButton>
                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        value={movieTitle}
                        onChange={handleInputChange}
                    />
                </BorderWrap>

            </SearchForm>
        </>
    );
}

MovieFinder.propTypes = {
    setMovies: PropTypes.func.isRequired
};