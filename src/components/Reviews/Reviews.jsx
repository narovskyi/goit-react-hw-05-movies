import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Author, Review, ReviewList, Content, Notification } from "./Reviews.styled";

export default function Cast() {
    const { id } = useParams();
    const [reviews, setReviews] = useState();
    const [isError, setIsError] = useState();
    const [nothingFound, setNothingFound] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                if (!response.success) {
                    setIsError(response.status_message);
                }
                if (response.results.length === 0) {
                    setNothingFound('fail');
                }
                setReviews(response.results);
            })
            .catch(err => {
                console.log(err);
                setIsError(err);
            });
    }, [id]);

    if (nothingFound === 'fail') {
        return (
            <Notification>We don't have any reviews for this movie</Notification>
        );
    } else {
        return (
            <ReviewList>
                {reviews && reviews.map(({ id, author, content }) => {
                    return (
                        <Review key={id}>
                            <Author>{author}</Author>
                            <Content>{content}</Content>
                        </Review>
                    );
                })}
                {isError && <Notification>Sorry, something went wrong...</Notification>}
            </ReviewList>
        );
    }
}