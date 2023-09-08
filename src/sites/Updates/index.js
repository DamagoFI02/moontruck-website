import Mailchimp from '../../components/Mailchimp';

function Updates() {
    return (
        <div className='pt-24 text-white max-w-screen-md mx-auto'>
            <h1 className='text-3xl font-bold '>
                Moontruck - Developer Preview
            </h1>
            <section className='mt-8'>
                <h2 className='text-2xl font-bold'>Demnächst neue Features</h2>
                <ul className='list-disc mt-4 ml-6'>
                    <li>AI Fahrt mit Kamera</li>
                    <li>Update auf Raspberry Pi4</li>
                    <li>Update vom PCA9685 auf Adroino Nano</li>
                    <li>Update auf Robot operating System</li>
                </ul>
            </section>

            <Mailchimp />
            <div className='mb-40' />
        </div>
    );
}

export default Updates;
