import { RotatingLines } from  'react-loader-spinner'

const Loader = ({width}) => {
    return(
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width={width}
            visible={true}
        />
    )
}
export default Loader;