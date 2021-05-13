import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Mirador from "./Mirador";

class Preview extends Component {

  render() {
    return (
      <div>
        <Mirador
          config={{
            id: 'mirador',
            windows: [
              {
                loadedManifest: this.props.manifest.id,
              },
            ],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
      </div>
    )

  }
}

export default Preview;
