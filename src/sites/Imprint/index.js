import Maps from '../../components/Maps';

function Imprint() {
    return (
        <section className='Contact bg-nope-mellow dark:bg-nope-grey-middle  rounded-lg drop-shadow-2xl shadow-2xl pb-8 bg-neutral-900'>
            <address className='text-white pt-9 pl-6'>
                <a
                    className=''
                    href='https://www.google.com/maps/place/Horner+Weg+205,+22111+Hamburg/@53.555247,10.0745182,17z/data=!3m1!4b1!4m5!3m4!1s0x47b18c19de42fb6f:0x967465a135005944!8m2!3d53.555247!4d10.0767069'
                    target='blank'
                >
                    Norman Pendzich
                    <br />
                    Horner Weg 205b
                    <br />
                    22111 Hamburg
                </a>

                <h3 className='mt-4'>Email:</h3>

                <a href='mailto:normanpendzich@gmail.com'>
                    normanpendzich@gmail.com
                </a>
                <h3 className='mt-4'>Phone:</h3>
                <a className='text-web-grau' href='tel:+4915161449132'>
                    +49 15161449132
                </a>
            </address>
            <div className='pt-8'>
                <Maps />
            </div>
        </section>
    );
}

export default Imprint;
