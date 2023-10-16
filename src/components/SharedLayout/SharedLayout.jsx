import Header from "components/Header";
import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
}