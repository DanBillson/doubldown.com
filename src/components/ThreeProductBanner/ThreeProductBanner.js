import './ThreeProductBanner.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LayeredTitle from '../../components/LayeredTitle/LayeredTitle';
import { ReactComponent as Checkbox } from '../../assets/images/checkbox.svg';

class ThreeProductBanner extends Component {
    renderProducts() {
        return this.props.products.products.map(product => {
            const list = product.points.map((point, index) => <li key={ index }><Checkbox />{ point }</li>);
            return (
                <div className="product" key={ product.name }>
                    <h2 className="product__title">{ product.name }</h2>
                    <h2 className="product__price"><span>from</span>{ product.price }</h2>
                    <ul className="product__list">{ list }</ul>
                    <Link 
                        to={ product.cta.link } 
                        className="product__cta button button--secondary"
                        onClick={ () => window.scrollTo(0, 0) }
                    >{ product.cta.name }</Link>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="threeProductBanner">
                <LayeredTitle title={ this.props.products.title } />
                <div className="threeProductBanner__banners">
                    { this.renderProducts() }
                </div>
            </div>
        );
    }
}

export default ThreeProductBanner;