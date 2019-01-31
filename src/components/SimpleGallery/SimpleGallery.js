import './SimpleGallery.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LayeredTitle from '../../components/LayeredTitle/LayeredTitle'

class SimpleGallery extends Component {
    renderImages() {
        return this.props.gallery.images.map((image, index) => {
            return <div className="simpleGallery__image" style={{ backgroundImage: image.image }} key={ index }>{ image.logo }</div>;
        })
    }

    render() {
        return (
            <div className="simpleGallery">
                <LayeredTitle title={ this.props.gallery.title } />
                <div className="simpleGallery__images">{ this.renderImages() }</div>
                <Link 
                    to={ this.props.gallery.cta.link } 
                    className="simpleGallery__cta button button--primary"
                    onClick={ () => window.scrollTo(0, 0) }
                >
                    { this.props.gallery.cta.text }
                </Link>
            </div>
        );
    }
}

export default SimpleGallery;