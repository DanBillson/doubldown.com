import './Hero.scss';
import React, { Component } from 'react';
import Social from '../../components/Social/Social';
import { social } from '../../config/home';

class Hero extends Component {
    render() {
        return (
            <div className="hero" style={{ backgroundImage: this.props.hero.image }}>
                <h1 className="hero__title">{ this.props.hero.heading }</h1>
                <div className="hero__logo">{ this.props.hero.logo }</div>
                <div className="hero__social"><Social social={ social }/></div>
            </div>
        );
    }
}

export default Hero;