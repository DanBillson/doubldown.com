import React from 'react';
import { ReactComponent as WebDesign } from '../assets/images/webdesign.svg';
import { ReactComponent as Website } from '../assets/images/website.svg';
import { ReactComponent as ECommerce } from '../assets/images/ecommerce.svg';

export const services = [{
    title: 'Web Design',
    price: '£75',
    image: <WebDesign />,
    text: `With this service you will receive a full design of your website including a mobile design built using industry standard technology. All assets in the design will come packaged, this will include fonts, images and icons.
    A one page web design will start at £75 and increase by £25 for each additional page up to 8 pages.`,
    cta: 'Get in touch'
}, {
    title: 'Full Website',
    price: '£199',
    image: <Website />,
    text: `All websites are unique and tailored towards your needs and built with great consideration to it’s users’ with a fully responsive website allowing great user experience on any device.
    Prices start at £199 and increase by £75 per additional page up to 8 pages.
    Website hosting will be an additional £5 per month. 
    No contract - cancel anytime.`,
    cta: 'Get in touch'
}, {
    title: 'E-Commerce',
    price: '£199',
    image: <ECommerce />,
    text: `Add a shop to your doubldown website for just £199 and then £15 per month. Take full control over the products you are selling on your shop and have full guidance on shop setup.
    No contract - cancel anytime.`,
    cta: 'Get in touch'
}]