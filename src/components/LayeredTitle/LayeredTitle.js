import './LayeredTitle.scss';
import React from 'react';

const LayeredTitle = props => {
    return (
        <div className="layeredTitle">
            <h1 className="layeredTitle__title layeredTitle__title--top">{ props.title }</h1>
            <h1 className="layeredTitle__title layeredTitle__title--middle">{ props.title }</h1>
            <h1 className="layeredTitle__title layeredTitle__title--bottom">{ props.title }</h1>
        </div>
    );
}

export default LayeredTitle;