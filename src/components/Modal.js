import React, { Component } from 'react';
import Mirador from "./Mirador";

class Modal extends Component {

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

    console.log(this.props.autozoom)

    return (
      <React.Fragment>
        <a className="yith-modal-close"
           tabIndex="0"
           href="#"
           aria-label={`Close Viewer`}
           onClick={this.showModal}
        >
          Close Viewer
        </a>
        <div className="yith-modal">
          <Mirador
            autozoom={this.props.autozoom}
            config={{
              id: 'yith',
              window: {
                allowMaximize: false,
                allowClose: false
              },
              windows: [
                {
                  loadedManifest: this.props.iiif.id,
                },
              ],
              workspaceControlPanel: {
                enabled: false,
              },
            }}
            plugins={[]}
          />
        </div>
      </React.Fragment>
    )

  }
}

export default Modal;
