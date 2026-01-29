import { TypeAnimation } from 'react-type-animation';

// Component to display a typing animation for my name (Sabrina Areias)
function TypedString({strToType}: {strToType: string}) {
    return (
        <h1 className ="display-3 mb-3">
            <TypeAnimation
            sequence={[
                strToType, 1000
            ]}
            speed={30}
            style={{ fontSize: '1em' }}
            repeat={Infinity}
            />
        </h1>
    );
}
export default TypedString;