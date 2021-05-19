import React, { Component } from 'react';
import Mirador from "./Mirador";

class Projection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      annotations: false,
      activeWindow: null
    }

    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.showModal(false);
  }

  toggleCanvas = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const {sequence} = this.props;
    let nextIndex = this.state.index + 1;

    this.setState({
      index: nextIndex,
      activeWindow: {
        manifestId: sequence[nextIndex].manifest,
        canvasId: null
      }
    })
  }

  hasAnnotations = (current) => {
    if (current.annotations) {
      return true
    } else {
      return false
    }
  }

  componentDidMount() {
    const { sequence } = this.props;

    this.setState({
      activeWindow: {
        manifestId: sequence[this.state.index].manifest
      }
    })
  }

  render() {

    let {activeWindow} = this.state

    if (this.props.active && activeWindow) {
      console.log(this.props)
      return (
        <React.Fragment>
          <div className="yith-structure">
            <a className="yith-close"
               tabIndex="0"
               href="#"
               aria-label={`Close Viewer`}
               onClick={this.showModal}
            >
              Close Viewer
            </a>
            <div className="yith-modal">
              <div className="yith-context">
                <div dangerouslySetInnerHTML={{__html:this.props.sequence[this.state.index].value}}></div>
                <nav>
                  <a href="#" onClick={this.toggleCanvas}>Next</a>
                </nav>
              </div>
              <Mirador
                config={{
                  id: 'yith-projection',
                  selectedTheme: 'dark',
                  window: {
                    hideWindowTitle: true,
                    allowTopMenuButton: false,
                    allowWindowSideBar: false,
                    allowMaximize: false,
                    allowClose: false
                  },
                  windows: [activeWindow],
                  workspaceControlPanel: {
                    enabled: false,
                  },
                }}
                plugins={[]}
                manifest={this.state.manifest}
              />
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return null
    }

  }
}

export default Projection;
