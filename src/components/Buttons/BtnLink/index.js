import {Link} from 'react-router-dom';

function BtnLink(props) {
    return (
        <>
            <Link
                to={props.to}
                className='bg-black border-2 border-rose-500 text-red-600 w-40 px-8 py-2'
            >
                {props.children}
            </Link>
        </>
    );
}

export default BtnLink;
