import React from 'react';
import ProductBanners from '../../components/ProductBanners/ProductBanners';
import { services } from '../../config/services';

const Services = () => {
    return (
        <>
            <ProductBanners banners={ services } />
        </>
    );
}

export default Services;