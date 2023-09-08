import {Outlet} from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

function RootsLayout() {
    return (
        <>
            <div id='max-w-screen-md mx-auto'>
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default RootsLayout;
