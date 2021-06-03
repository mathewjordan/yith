import React, { Component } from 'react';
import TeaserFigure from "./TeaserFigure";

class Teaser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async getManifest(url) {
    const response = await fetch(url);
    const manifest = await response.json();
    return manifest;
  }



  componentDidMount() {
    this.props.sequence.map((item, index) => {
      this.getManifest(item.manifest).then(data => {
        this.state.data[index] = data
        this.setState({
          loaded: true
        })
      });
    })
  }

  render() {

    if (this.state.loaded) {
      if (this.state.data.length > 1) {
        if (typeof(this.state.data[0]) !== 'undefined') {

          let region = 'full';
          let size = '!400,400';

          return (
            <React.Fragment>
              <TeaserFigure data={this.state.data[0]} region={region} size={size} />
              <TeaserFigure data={this.state.data[1]} region={region} size={size} />
            </React.Fragment>
          )

        } else {
          return null
        }
      } else {
        return null
      }
    } else {
      return null
    }

  }

}

export default Teaser;
