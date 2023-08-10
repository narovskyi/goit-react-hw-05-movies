// import PropTypes from 'prop-types';
import { HeaderWrap, StyledLink, Navigation } from "./Header.styled";

export default function Header() {
    return (
        <HeaderWrap>
            <Navigation>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </Navigation>
        </HeaderWrap>
    );
} 