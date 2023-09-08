import {Link} from 'react-scroll';

function BtnScrollDwn(props) {
    return (
        <Link
            to={props.to}
            smooth={true}
            duration={500}
            className='bg-black border-2 border-rose-500 text-red-600 w-40 px-8 py-2 cursor-pointer'
        >
            {props.children}
        </Link>
    );
}

export default BtnScrollDwn;
