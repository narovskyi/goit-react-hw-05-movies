import { Container, Image, Subtitle, Title, VoteAverage, Overview } from "./AboutMovie.styled";

export default function AboutMovie({ movie: { title, overview, genres, vote_average, vote_count }, imageUrl }) {
    
    return (
        <Container>
            <Image src={imageUrl} alt="" />
            <div>
                <Title>{title}</Title>
                <p><Subtitle>Avarage rating:</Subtitle> <VoteAverage>{vote_average}</VoteAverage> ({vote_count})</p>
                <p><Subtitle>Overview:</Subtitle></p>
                <Overview>{overview}</Overview>
                <p><Subtitle>Genres:</Subtitle></p> <ul>{genres && genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}</ul>
            </div>
        </Container>
    );
}