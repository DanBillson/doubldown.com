import React from 'react';
import TextList from '../../components/TextList/TextList';
import { about } from '../../config/about';

const About = () => {
    return (
        <>
            <TextList textList={ about } />
        </>
    );
}

export default About;