import './Social.scss';
import React, { Component } from 'react';

class Social extends Component {
    renderIcons() {
        return this.props.social.map((icon, index) => <a className={ icon.className } href={ icon.link } key={ index }>{ icon.icon }</a>);
    }

    render() {
        return (
            <div className="social">
                { this.renderIcons() }
            </div>
        );
    }
}

export default Social;