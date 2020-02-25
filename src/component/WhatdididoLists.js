import React from 'react';
import WhatdididoList from './WhatdididoList';

const WhatdididoLists = (props) => {
    return(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Saveoptions</h3>
            <button className="button button--link"
                onClick={props.handleDeleteSaveOptions}
            >
                Remove All
            </button>
            <button 
                className="button button--link"
                // onClick={props.hasClicked()}
            >
                Back to options
            </button>
        </div>
            {
                props.ididList.map((optionSave, index) => (
                    <WhatdididoList
                        key={optionSave}
                        saveText={optionSave}
                        count={index + 1}
                        handleDeleteSaveOption={props.handleDeleteSaveOption}
                    />
                ))
            }
    </div>
    )
}

export default WhatdididoLists;