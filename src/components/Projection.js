import React, { Component } from 'react';
import Mirador from "./Mirador";

class Projection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
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
    const { dom } = this.props;
    let nextIndex = this.state.index + 1;

    this.setState({
      index: nextIndex,
      activeWindow: {
        manifestId: dom[nextIndex].data.manifest
      }
    })
  }

  componentDidMount() {
    const { dom } = this.props;
    this.setState({
      activeWindow: {
        manifestId: dom[this.state.index].data.manifest
      }
    })
  }

  render() {

    let {activeWindow} = this.state


    console.log(this.props.showModal)

    if (this.props.active && activeWindow) {
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
                <strong>Additional Stuff</strong>
                <p>Phasellus feugiat mollis tincidunt. In hac habitasse platea dictumst. Pellentesque vitae laoreet lorem. Sed in dictum metus. Morbi vitae ex ac eros mattis sollicitudin. </p>
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
