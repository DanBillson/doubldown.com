import React from 'react';
import Background from '../assets/images/background.jpg';
import { ReactComponent as HeaderLogo } from '../assets/images/doubldownlogo.svg';
import { ReactComponent as HeroLogo } from '../assets/images/ddownLogo.svg';
import { ReactComponent as MobileLogo } from '../assets/images/ddownLogo.svg';
import { ReactComponent as Hamburger } from '../assets/images/hamburger.svg';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';
import { ReactComponent as Facebook } from '../assets/images/facebook.svg';
import { ReactComponent as Instagram } from '../assets/images/instagram.svg';
import { ReactComponent as LinkedIn } from '../assets/images/linkedin.svg';
import { ReactComponent as PNLogo } from '../assets/images/PowerNationLogo.svg';
import { ReactComponent as CDLogo } from '../assets/images/cdlogo.svg';
import PNSite from '../assets/images/pnwebsite.png';
import CDSite from '../assets/images/cdwebsite.png';

export const header = {
    logo: <HeaderLogo />,
    links: [{
        name: 'about',
        link: '/about'
    }, {
        name: 'services',
        link: '/services'
    }, {
        name: 'our work',
        link: '/ourwork'
    }],
    flyout: {
        name: 'contact',
        image: <Arrow />
    }
}

export const mobileHeader = {
    logo: <MobileLogo />,
    hamburger: <Hamburger className="hamburger"/>,
    links: [{
        name: 'about',
        link: '/about'
    }, {
        name: 'services',
        link: '/services'
    }, {
        name: 'our work',
        link: '/ourwork'
    }],
    flyout: {
        name: 'contact',
        image: <Arrow />
    }
}

export const hero = {
    image: `url(${ Background })`,
    logo: <HeroLogo />,
    heading: `BEAUTIFULLY HANDCRAFTED & AFFORDABLE WEBSITES`
}

export const ourStory = {
    title: 'Our Story',
    text: `At doubldown we are dedicated to provide bespoke and affordable solutions to cheerleading and dance programmes. With multiple years of experience in cheerleading and web design and development we understand your needs like no other company. We have great relations with some of the top teams across the country so why not be one of them?`,
    cta: {
        name: `Find out more`,
        link: '/about',
    }
}

export const products = {
    title: 'Our services',
    products: [{
        name: 'Web Design',
        price: '£75',
        points: ['Bespoke designs', 'Logo & Branding available'],
        cta: {
            name: 'Find out more',
            link: '/services'
        }
    }, {
        name: 'Full Website',
        price: '£199',
        points: ['6 Months free hosting', 'Free design', 'Up to 8 unique pages'],
        cta: {
            name: 'Find out more',
            link: '/services'
        }
    }, {
        name: 'E-Commerce',
        price: '£199',
        points: ['Only £15 a month', 'Full control over shop'],
        cta: {
            name: 'Find out more',
            link: '/services'
        }
    }]
}

export const gallery = {
    title: 'Our Work',
    images: [{
        image: `url(${ PNSite })`,
        logo: <PNLogo />
    }, {
        image: `url(${ CDSite })`,
        logo: <CDLogo />
    }],
    cta: {
        text: 'See More',
        link: '/ourwork'
    }
}

export const social = [{
    icon: <Facebook />,
    link: `https://www.facebook.com/doubldownweb/`
}, {
    icon: <Instagram />,
    link: `https://www.instagram.com/doubldownweb/`
}, {
    className: 'linkedin',
    icon: <LinkedIn />,
    link: `https://www.linkedin.com/company/doubldown/about/`
}]

export const footer = ['hello@doubldown.com', '07583839415'];

