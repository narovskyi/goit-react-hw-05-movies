import { Container, Image, Subtitle, Title, Highlight, Overview, Paragraph } from "./AboutMovie.styled";

export default function AboutMovie({ movie: { title, overview, genres, vote_average, vote_count }, imageUrl }) {
    
    return (
        <Container>
            <Image src={imageUrl} alt="" />
            <div>
                <Title>{title}</Title>
                <Paragraph><Subtitle>Avarage rating:</Subtitle> <Highlight>{vote_average}</Highlight> ({vote_count})</Paragraph>
                <Paragraph><Subtitle>Overview:</Subtitle></Paragraph>
                <Overview>{overview}</Overview>
                <Paragraph><Subtitle>Genres:</Subtitle> {genres && genres.map(genre => (<Highlight key={genre.id}>{genre.name}</Highlight>))}</Paragraph>
            </div>
        </Container>
    );
}