import React from 'react';
import WhatdididoLists from './WhatdididoLists';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import IndecisionApp from './IndecisionApp';

const Whatdidido = (props) => (
        <div className="big-button-wrap">
            <button 
                className="big-button-blue"
                onClick={(e) => {props.hasClickeddidido()}}
            >
                What did I do?
            </button>

            <button 
                className="big-button-green"
                onClick={(e) => {props.hasClickeOptions()}}
            >
                Back to options
            </button>
        </div>
);

export default Whatdidido;