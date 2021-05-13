import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/yith.scss";

import Yith from "./Yith";

Array.prototype.forEach.call(
  document.getElementsByClassName('yith'),
  function(el) {
    let manifest = el.getAttribute('data-manifest');
    let region = el.getAttribute('data-region');
    ReactDOM.render(<Yith manifest={manifest} region={region} />, el);
  }
);

module.hot.accept();
