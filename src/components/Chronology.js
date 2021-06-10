import React, { Component } from 'react';
import Manifest from "./Manifest";

class Chronology extends Component {

  mapStructure = (sequence) => {

    return sequence.map((element) => {
      if (element.tag === 'span') {
        return (
          <React.Fragment>
            <span className={element.class}>{element.value}</span>
          </React.Fragment>
        )
      } else if (element.tag === 'figure') {

        let region = null
        if (typeof element.region === 'string') {
          region = element.region
        }

        let autozoom = false
        if (typeof element.autozoom === 'string') {
          if (element.autozoom === 'true') {
            autozoom = true
          }
        }

        return (
          <React.Fragment>
            <div className={element.class}>
              <Manifest
                manifest={element.manifest}
                region={region}
                autozoom={autozoom}  />
            </div>
          </React.Fragment>
        )
      } else {
        return null
      }
    });
  }

  render() {

    const {sequence} = this.props

    return (
      <React.Fragment>
        <div className="yith-structure">
          {this.mapStructure(sequence)}
        </div>
      </React.Fragment>
    )

  }

}

export default Chronology;
