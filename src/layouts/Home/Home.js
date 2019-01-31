import React from 'react';
import Hero from '../../components/Hero/Hero';
import SimpleTextCTA from '../../components/SimpleTextCTA/SimpleTextCTA';
import ThreeProductBanner from '../../components/ThreeProductBanner/ThreeProductBanner';
import SimpleGallery from '../../components/SimpleGallery/SimpleGallery';
import { hero, ourStory, products, gallery } from '../../config/home';

const Home = () => {
    return (
        <>
            <Hero hero={ hero } />
            <SimpleTextCTA textCTA={ ourStory } />
            <ThreeProductBanner products={ products } />
            <SimpleGallery gallery={ gallery } />
        </>
    );
}

export default Home;