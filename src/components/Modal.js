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
                sideBarOpen: true,
                defaultSidebarPanelWidth: 320,
                allowTopMenuButton: true,
                allowWindowSideBar: true,
                allowMaximize: false,
                allowClose: false,
                forceDrawAnnotations: true
              },
              windows: [{
                manifestId: this.props.iiif.id
              }],
              workspaceControlPanel: {
                enabled: false,
              },
            }}
            plugins={[]}
            manifest={this.props.iiif.id}
            region={this.props.region}
            autozoom={this.props.autozoom}
            mode="initial"
          />
        </div>
      </React.Fragment>
    )

  }
}

export default Modal;
