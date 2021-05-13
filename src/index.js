import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/yith.scss";

import Yith from "./Yith";

Array.prototype.forEach.call(
  document.getElementsByClassName('yith'),
  function(el) {
    let manifest = el.getAttribute('data-manifest');
    ReactDOM.render(<Yith manifest={manifest} />, el);
  }
);

module.hot.accept();
