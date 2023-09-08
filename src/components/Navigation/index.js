import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav className='relative z-50 text-white'>
            <div className='absolute top-5 right-5'>
                <ul>
                    <li className='float-left mr-5'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='float-left  mr-5'>
                        <Link to='/updates'>Updates</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
