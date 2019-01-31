import React from 'react';
import WebsiteShowcase from '../../components/WebsiteShowcase/WebsiteShowcase';
import { ourWork } from '../../config/ourWork';

const OurWork = () => {
    return (
        <>
            <WebsiteShowcase work={ ourWork } />
        </>
    );
}

export default OurWork;