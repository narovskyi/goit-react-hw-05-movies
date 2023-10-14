import { Card, Name, Character, Image } from "./ActorCard.styled";

export default function ActorCard({ name, character, photoPath }) {
    return (
        <Card>
            <Image src={`https://image.tmdb.org/t/p/w200${photoPath}`} alt="" />
            <Name>{name}</Name>
            <Character>{character}</Character>
        </Card>
    );
}