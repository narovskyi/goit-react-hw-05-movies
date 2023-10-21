import { Button } from "./BackButton.styled";
import { HiArrowNarrowLeft } from 'react-icons/hi';
// import PropTypes from 'prop-types';

export default function BackButton({ pathTo }) {
    // console.log(typeof(pathTo));
    return (
        <Button to={pathTo}>
            <HiArrowNarrowLeft />
            Back
        </Button>
    );
}

// BackButton.propTypes = {
//     pathTo: PropTypes.object.isRequired
// };