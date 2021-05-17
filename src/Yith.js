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

  componentDidMount() {
    if (this.props.mode === 'chronology') {
      this.isActive()
    }
  }

  render() {

    const {mode, structure, expand} = this.props

    const {active} = this.state

    if (mode === 'chronology') {
      return  <Chronology structure={structure} active={active} />
    } else if (mode === 'projection') {
      return  <Projection structure={structure} active={active} />
    } else {
      return null
    }

  }
}

export default Yith;
