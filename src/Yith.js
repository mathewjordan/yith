import React, { Component } from 'react';

import Chronology from "./components/Chronology";
import Projection from "./components/Projection";

class Yith extends Component {

  constructor(props) {
    super(props);

    this.state ={
      active: false
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
    } else if (mode === 'projection') {
      return (
        <div className={`yith-modal-wrapper yith-modal-${active}`}>
          <Projection dom={structure} active={active} showModal={this.showModal} />
        </div>
      )
    }
  }

  componentDidMount() {
    if (this.props.mode === 'chronology') {
      this.isActive()
    }
  }

  render() {

    const {mode, structure, expand} = this.props

    const {active} = this.state

    return (
      <React.Fragment>
        {this.renderExpand(expand)}
        {this.renderStructure(structure, active, mode)}
      </React.Fragment>
    )

  }
}

export default Yith;
