import { Button } from "./BackButton.styled";
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function BackButton({ pathTo }) {
    console.log(pathTo);
    return (
        <Button to={pathTo}>
            <HiArrowNarrowLeft />
            Back
        </Button>
    );
}