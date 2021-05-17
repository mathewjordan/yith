import React, { Component } from 'react';

import Chronology from "./components/Chronology";
import Projection from "./components/Projection";
import Structure from "./components/Structure";

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
        <Structure mode={mode}
                   active={active}
                   structure={structure} />
      </React.Fragment>
    )

  }
}

export default Yith;
