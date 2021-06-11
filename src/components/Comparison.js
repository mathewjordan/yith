import React, { Component } from 'react';
import Mirador from "./Mirador";

class Comparison extends Component {

  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.showModal(false);
  }

  render() {

    if (this.props.active) {
      return (
        <React.Fragment>
          <a className="yith-close"
             tabIndex="0"
             href="#"
             aria-label={`Close Viewer`}
             onClick={this.showModal}
          >
            Close Viewer
          </a>
          <div className="yith-modal">
            <Mirador
              config={{
                id: 'yith-mirador-default',
                window: {
                  hideWindowTitle: false,
                  sideBarOpen: false,
                  allowTopMenuButton: true,
                  allowWindowSideBar: true,
                  allowMaximize: false,
                  allowClose: false,
                  forceDrawAnnotations: true
                },
                windows: [
                  {
                    manifestId: this.props.sequence[0].manifest,
                    canvasId: this.props.sequence[0].canvas
                  },
                  {
                    manifestId: this.props.sequence[1].manifest,
                    canvasId: this.props.sequence[1].canvas
                  }
                ],
                workspaceControlPanel: {
                  enabled: false,
                },
              }}
              plugins={[]}
              mode="initial"
            />
          </div>
        </React.Fragment>
      )
    } else
      return null
    }

}

export default Comparison;
