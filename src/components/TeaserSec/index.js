function TeaserSec(props) {
    return (
        <article className='text-white max-w-screen-md mx-auto'>
            <img src={props.imgsrc} />
            <div className='mt-16 mb-32 max-w-xl mx-auto'>

            <div className='mt-16 mb-32 max-w-xl mx-auto'>
                <h1 className='mb-4'>{props.heading}</h1>
                <p className=''>{props.children}</p>
            </div>
            </div>


        </article>
    );
}

export default TeaserSec;
