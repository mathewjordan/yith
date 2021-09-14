import React from 'react';
import ReactDOM from 'react-dom';
import Yith from './components/Yith'

Array.prototype.forEach.call(
    document.getElementsByClassName('yith'),
    function(el) {
        const screen = el.getAttribute('data-screen');
        ReactDOM.render(
            <Yith screen={screen} />, el
        );
    }
);