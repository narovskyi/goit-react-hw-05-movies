import { Outlet } from "react-router-dom";
import { Container, Image, Subtitle, Title, Highlight, Overview, Paragraph, InformationLink, FlexContainer } from "./AboutMovie.styled";


export default function AboutMovie({ movie: { title, overview, genres, vote_average, vote_count }, imageUrl }) {
    
    return (
        <>
            <Container>
            <FlexContainer>
            <Image src={imageUrl} alt="" />
            <div>
                <Title>{title}</Title>
                <Paragraph><Subtitle>Avarage rating:</Subtitle> <Highlight>{vote_average}</Highlight> ({vote_count})</Paragraph>
                <Paragraph><Subtitle>Overview:</Subtitle></Paragraph>
                <Overview>{overview}</Overview>
                <Paragraph><Subtitle>Genres:</Subtitle> {genres && genres.map(genre => (<Highlight key={genre.id}>{genre.name}</Highlight>))}</Paragraph>
                <InformationLink to='cast'>CAST</InformationLink>
                <InformationLink to='reviews'>Reviews</InformationLink>
            </div>
            </FlexContainer>
            <Outlet />
        </Container>
        </>
    );
}