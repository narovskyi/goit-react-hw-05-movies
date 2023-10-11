import { useEffect, useState } from "react";
import { Input, SearchButton, SearchForm } from "./MovieFinder.styled";
import { AiOutlineSearch } from 'react-icons/ai';

export default function MovieFinder({setMovies}) {
    const [movieTitle, setMovieTitle] = useState('');
    const [query, setQuery] = useState();

    const handleInputChange = (e) => {
        setMovieTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(movieTitle.trim());
    }

    useEffect(() => {
        if (query === undefined || query === '') {
            // console.log(query);
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6e502cbaaa880d060a13b6a3192abd0&query=${query}&include_adult=false&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // if (!response.success) {
                //     setIsError(response.status_message);                   
                // }
                setMovies(response.results);
            })
            .catch(err => {
                console.log(err);
                // setIsError(err);
            });

    }, [query, setMovies])


    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
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
            </SearchForm>
        </>
    );
}