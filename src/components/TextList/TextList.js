import './TextList.scss';
import React, { Component } from 'react';
import LayeredTitle from '../../components/LayeredTitle/LayeredTitle';

class TextList extends Component {
    renderText() {
        return this.props.textList.list.map(text => {
            return (
                <div className="textList__section" key={ text.title }>
                    <h2 className="textList__title">{ text.title }</h2>
                    <p className="textList__text">{ text.text }</p>
                </div>
            );
        })
    }

    render() {
        return(
            <div className="textList">
                <LayeredTitle title={ this.props.textList.title } />
                { this.renderText() }
            </div>
        );
    }
}

export default TextList;
