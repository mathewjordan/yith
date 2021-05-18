import React, { Component } from 'react';
import Mirador from "./Mirador";

class Projection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      activeWindow: null
    }
  }

  componentDidMount() {
    const { dom } = this.props;
    this.setState({
      activeWindow: {
        manifestId: dom[0].data.manifest
      }
    })

    // proof of concept that I can send manifest to a mirador viewer window at any time
    // setTimeout(() => {
    //   this.setState({
    //     activeWindow: {
    //       manifestId: dom[1].data.manifest
    //     }
    //   })
    // }, 5000);
    //
    // setTimeout(() => {
    //   this.setState({
    //     activeWindow: {
    //       highlightAllAnnotations: true,
    //       manifestId: "https://iiif.harvardartmuseums.org/manifests/object/299843",
    //       canvasId: "https://iiif.harvardartmuseums.org/manifests/object/299843/canvas/canvas-47174892",
    //     }
    //   })
    // }, 7500);
    //
    // setTimeout(() => {
    //   this.setState({
    //     activeWindow: {
    //       manifestId: "https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json",
    //       canvasId: "https://iiif.bodleian.ox.ac.uk/iiif/canvas/33ce3177-0fdc-44fd-8325-24a298322023.json"
    //     }
    //   })
    // }, 15000);
  }

  render() {

    const {dom} = this.props
    let {activeWindow} = this.state

    if (activeWindow) {
      return (
        <React.Fragment>
          <div className="yith-structure">
            <div className="yith-context">
              <strong>Additional Stuff</strong>
              <p>Phasellus feugiat mollis tincidunt. In hac habitasse platea dictumst. Pellentesque vitae laoreet lorem. Sed in dictum metus. Morbi vitae ex ac eros mattis sollicitudin. </p>
              <nav>
                <a>Next</a>
              </nav>
            </div>
            <Mirador
              config={{
                id: 'yith',
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
        </React.Fragment>
      )
    } else {
      return null
    }

  }
}

export default Projection;
