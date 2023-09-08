function Maps() {
    return (
        <div className='maps'>
            <iframe
                title='Google Maps'
                className='w-64 rounded-lg ml-6  mx-auto '
                height='400'
                frameborder='5'
                marginheight='0'
                marginwidth='0'
                id='gmap_canvas'
                src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Horner%20Weg%20205b%20Hamburg+(Norman%20Pendzich)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            ></iframe>
        </div>
    );
}

export default Maps;
