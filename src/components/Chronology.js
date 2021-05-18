import React, { Component } from 'react';
import Manifest from "./Manifest";

class Chronology extends Component {

  mapStructure = (dom) => {
    return dom.map((element) => {
      if (element.tag === 'span') {
        return (
          <React.Fragment>
            <span className={element.class}>{element.value}</span>
          </React.Fragment>
        )
      } else if (element.tag === 'div') {

        let region = null
        if (element.data.region === typeof('string')) {
          region = element.data.region
        }

        return (
          <React.Fragment>
            <div className={element.class}>
              <Manifest
                manifest={element.data.manifest}
                region={region} />
            </div>
          </React.Fragment>
        )
      } else {
        return null
      }
    });
  }

  render() {

    const {dom} = this.props

    return (
      <React.Fragment>
        <div className="yith-structure">
          {this.mapStructure(dom)}
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
