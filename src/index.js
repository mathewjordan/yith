import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/yith.scss";

import Yith from "./Yith";

Array.prototype.forEach.call(
  document.getElementsByClassName('yith'),
  function(el) {
    const mode = el.getAttribute('data-mode');
    const structure = buildStructure(el)
    const expand = buildExpand(el)
    ReactDOM.render(
      <Yith mode={mode} structure={structure} expand={expand}  />, el
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
    if (item.textContent != '') {
      itemTextContent = item.textContent
    }

    let itemDataset = null;
    if (Object.keys(item.dataset).length > 0) {
      itemDataset = JSON.parse(JSON.stringify(item.dataset))
    }

    let annotationStructure = null;
    if (item.childElementCount !== 0) {

      let annotationIndex = 0;
      annotationStructure = [];

      while(item.children.length > annotationStructure.length) {

        let annotation = item.children.item(annotationIndex);
        annotationIndex++;

        if (annotation) {

          console.log(annotation)

          let itemAnnotationClass = null;
          if (annotation.className != '') {
            itemAnnotationClass = annotation.className
          }
          let itemAnnotationTextContent = null;
          if (annotation.textContent != '') {
            itemAnnotationTextContent = annotation.innerHTML
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

    structure.push({
      "tag": item.localName,
      "value": itemTextContent,
      "data": itemDataset,
      "class": itemClass,
      'annotations': annotationStructure
    });
  }

  return structure;

}

//
// Array.prototype.forEach.call(collectionEl, function(el, i){
//   console.log(el)
// });

module.hot.accept();
