import { Card, Name, Character, Image } from "./ActorCard.styled";
import PropTypes from 'prop-types';


export default function ActorCard({ name, character, photoPath }) {
    return (
        <Card>
            <Image src={`https://image.tmdb.org/t/p/w200${photoPath}`} alt="" />
            <Name>{name}</Name>
            <Character>{character}</Character>
        </Card>
    );
}

ActorCard.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    photoPath: PropTypes.string
};