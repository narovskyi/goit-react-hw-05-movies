import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutMovie from "components/AboutMovie";

export default function MovieDetails() {
    const { id }  = useParams();
    const [movieObj, setMovieObj] = useState({});
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovieObj(response);
                setImageUrl(`https://image.tmdb.org/t/p/w300/${response.poster_path}`);
            })
            .catch(err => console.error(err));
    }, [id])
    
    return (
        <>
            <AboutMovie movie={movieObj} imageUrl={imageUrl}/>
        </>
        
    );
}