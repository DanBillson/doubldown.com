import './Footer.scss';
import React, { Component } from 'react';
import Social from '../../components/Social/Social';
import { social } from '../../config/home';

class Footer extends Component {
    renderInfo() {
        return this.props.footer.map((info, index) => <li key={ index }>{ info }</li>);
    }

    render() {
        return (
            <footer className="footer">
                <Social social={ social } />
                <div className="footer__info">
                    <ul>{ this.renderInfo() }</ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
