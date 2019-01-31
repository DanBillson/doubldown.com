import './SimpleTextCTA.scss';
import React, { Component } from 'react';
import LayeredTitle from '../../components/LayeredTitle/LayeredTitle';

class SimpleTextCTA extends Component {
    render() {
        return (
            <div className="simpleTextCTA">
                <LayeredTitle title={ this.props.textCTA.title } />
                <div className="simpleTextCTA__text"><p>{ this.props.textCTA.text }</p></div>
                <a href={ this.props.textCTA.cta.link } className="simpleTextCTA__button button button--primary">{ this.props.textCTA.cta.name }</a>
            </div>
        );
    }
}

export default SimpleTextCTA;