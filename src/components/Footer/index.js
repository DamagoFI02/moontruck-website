import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className='text-white bg-neutral-900'>
            <ul>
                <li className='float-left mr-5'>
                    <Link to='/dsgvo'>Datenschutz</Link>
                </li>
                <li className='float-left  mr-5'>
                    <Link to='/impressum'>Impressum</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
