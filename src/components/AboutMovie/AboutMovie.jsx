import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Image, Subtitle, Title, Highlight, Overview, Paragraph, InformationLink, FlexContainer } from "./AboutMovie.styled";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';


export default function AboutMovie({ movie: { title, overview, genres, vote_average, vote_count }, imageUrl }) {
    
    return (
        <Container>
            <FlexContainer>
            <Image src={imageUrl} alt="" />
            <div>
                <Title>{title}</Title>
                <Paragraph><Subtitle>Avarage rating:</Subtitle> <Highlight>{vote_average}</Highlight> ({vote_count})</Paragraph>
                <Paragraph><Subtitle>Overview:</Subtitle></Paragraph>
                <Overview>{overview}</Overview>
                <Paragraph><Subtitle>Genres:</Subtitle> {genres && genres.map(genre => (<Highlight key={genre.id}>{genre.name}</Highlight>))}</Paragraph>
                <InformationLink to='cast'>Cast</InformationLink>
                <InformationLink to='reviews'>Reviews</InformationLink>
            </div>
            </FlexContainer>
            <Suspense fallback={<Loader />}>
                    <Outlet />
            </Suspense>    
        </Container>
    );
}

AboutMovie.propTypes = {
    movie: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired,
};