import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorCard from "components/ActorCard";
import { Notification, CardList } from "./Cast.styled";

export default function Cast() {
    const { id } = useParams();
    const [actors, setActors] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (!response.success) {
                    setIsError(response.status_message);
                }
                setActors(response.cast);
            })
            .catch(err => {
                console.log(err);
                setIsError(err);
            });
    }, [id]);

    return (
        <>
            <CardList>
                {actors && actors.map(({ id, name, character, profile_path }) =>
                    <ActorCard
                        key={id}
                        name={name}
                        character={character}
                        photoPath={profile_path}
                    />
                )}
            </CardList>
            {isError && <Notification>Sorry, something went wrong...</Notification>}
        </>     
    );
}