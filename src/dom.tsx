import React from "react";
import ReactDOM from "react-dom";
import { ByClass } from "components/ByClass";

/**
 * Render to DOM (non-JSX method)
 */
Array.prototype.forEach.call(
  document.getElementsByClassName("yith-iiif"),
  function (element) {
    const children = Array.from(element.children);
    const preview = element.dataset.preview;
    const text = element.dataset.text;
    const type = element.dataset.type;
    ReactDOM.render(
      <ByClass children={children} preview={preview} text={text} type={type} />,
      element
    );
  }
);
