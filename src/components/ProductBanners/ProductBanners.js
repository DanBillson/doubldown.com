import './ProductBanners.scss';
import React, { Component } from 'react';

class ProductBanners extends Component {
    openContact = () => {
        document.querySelector('.js-contact').classList.add('open');
    }

    renderBanners() {
        return this.props.banners.map(banner => {
            return (
                <div className="productBanner" key={ banner.title }>
                    <h2 className="productBanner__price"><span>from</span>{ banner.price }</h2>
                    <div className="productBanner__image">
                        { banner.image }
                    </div>
                    <div className="productBanner__info">
                        <h2 className="productBanner__title">{ banner.title }</h2>
                        <p className="productBanner__text">{ banner.text }</p>
                        <p className="productBanner__cta button button--tertiary" onClick={ this.openContact.bind(this) }>{ banner.cta }</p>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="productBanners">
                { this.renderBanners() }
                <div className="pink"></div>
                <div className="blue"></div>
            </div>
        );
    }
}

export default ProductBanners;