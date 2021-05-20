import React, { Component } from 'react';

import Chronology from "./components/Chronology";
import Projection from "./components/Projection";

class Yith extends Component {

  constructor(props) {
    super(props);

    this.state ={
      active: false,
      data: []
    }

    this.showModal = this.showModal.bind(this);
  }

  isActive = () => {
    this.setState(state => ({
      active: !state.active
    }));
  }

  showModal() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  renderExpand = (data) => {
    if (data) {
      return (
        <a href="#"
           class="yith-expand"
           onClick={this.isActive}>
          {data.value}
        </a>
      )
    }
  }

  renderStructure = (structure, active, mode) => {
    if (mode === 'chronology') {
      return <Chronology dom={structure} />
    } else if (mode === 'projection' && this.state.data.length > 0) {
      return (
        <div className={`yith-modal-wrapper yith-modal-${active}`}>
          <Projection manifests={this.state.data} sequence={this.state.sequence} active={active} showModal={this.showModal} />
        </div>
      )
    }
  }

  getManifest = (uri, index) => {
    fetch(uri, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.state.data[index] = data
      })
      .catch(err => console.error(this.props.url, err.toString()));
    return null
  }

  buildSequence = (dom) => {
    let sequence = []
    dom.map((item, mIndex) => {
      this.getManifest(item.data.manifest, mIndex);
      if (!item.annotations) {
        sequence.push({
          "mIndex": mIndex,
          "type": "manifest",
          "manifest": item.data.manifest,
          "canvas": item.data.canvas,
          "value": item.value
        })
      } else {
        item.annotations.map((annotation, aIndex) => {
          sequence.push({
            "mIndex": mIndex,
            "aIndex": aIndex,
            "type": "annotation",
            "manifest": item.data.manifest,
            "canvas": annotation.data.canvas,
            "annotation": annotation.data.annotation,
            "value": annotation.value,
          })
        });
      }
    });

    this.setState(state => ({
      sequence: sequence
    }));
  }

  componentDidMount() {
    if (this.props.mode === 'chronology') {
      this.isActive()
    }

    this.buildSequence(this.props.structure)
  }

  render() {

    const {mode, structure, expand} = this.props

    const {active} = this.state


    if (this.state.sequence) {
      return (
        <React.Fragment>
          {this.renderExpand(expand)}
          {this.renderStructure(structure, active, mode)}
        </React.Fragment>
      )
    } else {
      return null
    }

  }
}

export default Yith;
