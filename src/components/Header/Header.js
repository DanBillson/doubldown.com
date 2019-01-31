import './Header.scss';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
    componentDidMount = () => {
        const hamburger = document.querySelector('.hamburger');
        const flyout = document.querySelectorAll('.js-flyout');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            document.querySelector('.js-nav-toggle').classList.toggle('active');
        });
        flyout.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.js-contact').classList.add('open');
            })
        })
    }

    closeNav = () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.js-nav-toggle').classList.remove('active');
    }

    renderLinks() {
        return this.props.header.links.map(link => <li key={ link.name }><Link to={ link.link } onClick={ this.closeNav.bind(this) }>{ link.name }</Link></li>);
    }

    render() {
        return (
            <div className="header" className={ this.props.location.pathname === '/' ? 'header' : 'header header--background'}>
                <div className="header__container">
                    <div className="header__logo"><Link to='/'>{ this.props.header.logo }</Link></div>
                    <nav>
                        <ul className="header__nav">
                            { this.renderLinks() }
                        </ul>
                    </nav>
                    <div className="header__flyout js-flyout">
                        <p>{ this.props.header.flyout.name }</p>
                        <div className="header__flyout-image">{ this.props.header.flyout.image }</div>
                    </div>
                </div>
                <div className="mobileHeader">
                    <div className="mobileHeader__logo"><Link to='/'>{ this.props.mobileHeader.logo }</Link></div>
                    <div className="mobileHeader__navIcon">{ this.props.mobileHeader.hamburger }</div>
                    <div className="mobileHeader__flyout js-flyout">
                        <p>{ this.props.header.flyout.name }</p>
                        <div className="header__flyout-image">{ this.props.header.flyout.image }</div>
                    </div>
                    <div className="mobileHeader__links js-nav-toggle">{ this.renderLinks() }</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);