import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/yith.scss";

import Yith from "./Yith";

Array.prototype.forEach.call(
  document.getElementsByClassName('yith'),
  function(el) {
    const expand = buildExpand(el)
    const mode = el.getAttribute('data-mode');
    const structure = buildStructure(el)
    ReactDOM.render(
      <Yith expand={expand} mode={mode} structure={structure} />, el
    );
  }
);

function buildExpand(source) {

  const expand = source.querySelector('a.yith-expand');

  if (expand) {

    return ({
      "value": expand.textContent
    });

  } else {

    return false;

  }

}

function buildStructure(source) {

  const children = source.querySelector('div.yith-structure').children;

  let index = 0;
  let structure = [];

  while(children.length > structure.length) {

    let item = children.item(index);
    index++;

    let itemClass = null;
    if (item.className != '') {
      itemClass = item.className
    }

    let itemTextContent = null;
    if (item.querySelector('figcaption')) {
      itemTextContent = item.querySelector('figcaption').innerHTML
    }

    let itemDataset = null;
    if (Object.keys(item.dataset).length > 0) {
      itemDataset = JSON.parse(JSON.stringify(item.dataset))
    }

    let annotationStructure = null;

    if (item.querySelector('div.yith-items')) {

      let items = item.querySelector('div.yith-items');

      let annotationIndex = 0;
      annotationStructure = [];

      while(items.children.length > annotationStructure.length) {

        let annotation = items.children.item(annotationIndex);
        annotationIndex++;

        if (annotation) {

          let itemAnnotationClass = null;
          if (annotation.className != '') {
            itemAnnotationClass = annotation.className
          }

          let itemAnnotationTextContent = null;
          if (annotation.querySelector('figcaption')) {
            itemAnnotationTextContent = annotation.querySelector('figcaption').innerHTML
          }

          let itemAnnotationDataset = null;
          if (Object.keys(annotation.dataset).length > 0) {
            itemAnnotationDataset = JSON.parse(JSON.stringify(annotation.dataset))
          }

          annotationStructure.push({
            "tag": annotation.localName,
            "value": itemAnnotationTextContent,
            "data": itemAnnotationDataset,
            "class": itemAnnotationClass
          });
        }

      }

    }

    if (item.localName === 'figure') {
      structure.push({
        "tag": item.localName,
        "value": itemTextContent,
        "data": itemDataset,
        "class": itemClass,
        'annotations': annotationStructure
      });
    } else {
      structure.push({
        "tag": item.localName,
        "value": item.innerHTML,
        "data": item.dataset,
        "class": item.className
      });
    }
  }

  return structure;

}

module.hot.accept();
