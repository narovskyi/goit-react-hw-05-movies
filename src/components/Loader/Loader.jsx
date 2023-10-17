import { Hourglass } from 'react-loader-spinner'
import { Wrapper } from './Loader.styled'

export default function Loader() {
    return (
        <Wrapper>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{
                    display: 'inline-block',
                    textAlign: 'center'
                }}
                colors={['#190530', '#a06cd9']}
            />
        </Wrapper>
    );
};