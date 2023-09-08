import React from 'react';

const Mailchimp = () => {
    return (
        <div className='mt-8  text-white'>
            <h2 className='text-2xl font-bold'>Don't miss the news</h2>
            <h1 className='text-3xl font-bold '>Subscribe to the Newsletter</h1>
            <div id='mc_embed_shell '>
                <div id='mc_embed_signup'>
                    <form
                        action='https://damago.us9.list-manage.com/subscribe/post?u=3d162732791e8b86e519a73eb&amp;id=874dd1bf6c&amp;f_id=008826e1f0'
                        method='post'
                        id='mc-embedded-subscribe-form'
                        name='mc-embedded-subscribe-form'
                        className='validate'
                        target='_self'
                        noValidate
                    >
                        <div id='mc_embed_signup_scroll'>
                            <div className='indicates-required'>
                                <span className='asterisk'>*</span> indicates
                                required
                            </div>
                            <div className='mc-field-group'>
                                <label htmlFor='mce-EMAIL'>
                                    E-Mail-Adresse{' '}
                                    <span className='asterisk'>*</span>
                                </label>
                                <input
                                    type='email'
                                    name='EMAIL'
                                    className='required email'
                                    id='mce-EMAIL'
                                    required
                                    value=''
                                />
                            </div>
                            <div className='mc-field-group'>
                                <label htmlFor='mce-FNAME'>Vorname </label>
                                <input
                                    type='text'
                                    name='FNAME'
                                    className=' text'
                                    id='mce-FNAME'
                                    value=''
                                />
                            </div>
                            <div className='mc-field-group'>
                                <label htmlFor='mce-LNAME'>Nachname </label>
                                <input
                                    type='text'
                                    name='LNAME'
                                    className=' text'
                                    id='mce-LNAME'
                                    value=''
                                />
                            </div>
                            <div id='mce-responses' className='clear foot'>
                                <div
                                    className='response'
                                    id='mce-error-response'
                                    style={{display: 'none'}}
                                ></div>
                                <div
                                    className='response'
                                    id='mce-success-response'
                                    style={{display: 'none'}}
                                ></div>
                            </div>
                            <div
                                aria-hidden='true'
                                style={{position: 'absolute', left: '-5000px'}}
                            >
                                {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                <input
                                    type='text'
                                    name='b_3d162732791e8b86e519a73eb_874dd1bf6c'
                                    tabIndex='-1'
                                    value=''
                                />
                            </div>
                            <div className='optionalParent'>
                                <div className='clear foot'>
                                    <input
                                        type='submit'
                                        name='subscribe'
                                        id='mc-embedded-subscribe'
                                        className='button'
                                        value='Subscribe'
                                    />
                                    <p style={{margin: '0px auto'}}>
                                        <a
                                            href='http://eepurl.com/iwBRnA'
                                            title='Mailchimp - email marketing made easy and fun'
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    backgroundColor: 'black',
                                                    borderRadius: '4px',
                                                }}
                                            >
                                                <img
                                                    className='refferal_badge'
                                                    src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg'
                                                    alt='Intuit Mailchimp'
                                                    style={{
                                                        width: '220px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        padding: '2px 0px',
                                                        justifyContent:
                                                            'center',
                                                        alignItems: 'center',
                                                    }}
                                                />
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mailchimp;
