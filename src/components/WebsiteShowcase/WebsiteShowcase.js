import './WebsiteShowcase.scss';
import React, { Component } from 'react';
import LayeredTitle from '../../components/LayeredTitle/LayeredTitle';

class WebsiteShowcase extends Component {
    renderShowcase() {
        return this.props.work.work.map(site => {
            return (
                <div className="websiteShowcase__site" key={ site.title }>
                    <h2 className="websiteShowcase__title">{ site.title }</h2>
                    <div className="websiteShowcase__images">
                        <img className="websiteShowcase__desktop" src={ site.desktop } alt="Desktop website"/>
                        <img className="websiteShowcase__mobile" src={ site.mobile } alt="Mobile website"/>
                    </div>
                    <a href={ site.cta.link } className="websiteShowcase__cta button button--primary">{ site.cta.text }</a>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="websiteShowcase">
                <LayeredTitle title={ this.props.work.title } />
                { this.renderShowcase() }
            </div>
        );
    }
}

export default WebsiteShowcase;