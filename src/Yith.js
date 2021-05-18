import React, { Component } from 'react';

import Chronology from "./components/Chronology";
import Projection from "./components/Projection";

class Yith extends Component {

  constructor(props) {
    super(props);

    this.state ={
      active: false
    }
  }

  isActive = () => {
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
      return <Projection dom={structure} active={active} />
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
