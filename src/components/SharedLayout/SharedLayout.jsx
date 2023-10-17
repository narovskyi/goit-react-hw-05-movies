import Header from "components/Header";
import Loader from "components/Loader/Loader";
import { Container } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <>
            <Header />
            <Container>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
}