import React, { Component } from 'react';
import Mirador from "./Mirador";

class Modal extends Component {

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {

    return (
      <React.Fragment>
        <a className="yith-modal-close"
           tabIndex="0"
           href="#"
           aria-label={`Close Viewer`}
           onClick={this.handleClick}
        >
          Close Viewer
        </a>
        <div className="yith-modal">
          <Mirador
            config={{
              id: 'mirador',
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
