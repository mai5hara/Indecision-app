import React from 'react';

const WhatdididoList = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.saveText}</p>
        <button 
            className="button button--link"
            onClick = {(e) => {
                props.handleDeleteSaveOption(props.saveText);
        }}
        >
            remove
        </button>
    </div>


);

export default WhatdididoList;