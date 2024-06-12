import React from 'react';
import Navigation from '../components/Navigation';
import ImageLogo from '../components/ImageLogo';

const Contact = () => {
    return (
        <div className='container mx-auto px-4'>
            <ImageLogo />
            <Navigation />
            <div className="text-xl my-8">
                patrick-kamdem@patelot.de
            </div>
        </div>
    );
};

export default Contact;