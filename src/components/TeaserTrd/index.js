import {Link} from 'react-router-dom';

function TeaserTrd(props) {
    return (
        <section className='text-white max-w-screen-md mx-auto'>
            <div className='mt-16 mb-4 max-w-xl '>
                <Link to='/updates' className='border-4'>
                    {props.heading}
                </Link>

                <p className='mt-8'>{props.children}</p>
            </div>

            <img src={props.imgsrc} />
        </section>
    );
}

export default TeaserTrd;
