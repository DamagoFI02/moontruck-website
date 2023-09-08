function TeaserMain(props) {
    return (
        <article className='ENTDECKEN text-white max-w-screen-lg mx-auto mt-28'>
            <img src={props.imgsrc} />
            <div className='mt-16 mb-32 max-w-xl mx-auto'>
                <h1 className='mb-4'>{props.heading}</h1>
                <p className=''>{props.children}</p>
            </div>
        </article>
    );
}

export default TeaserMain;
