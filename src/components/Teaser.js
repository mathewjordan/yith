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
          let size = '!700,700';

          return (
            <div className="yith-teaser">
              <TeaserFigure data={this.state.data[0]} canvas={this.props.sequence[0].canvas} region={region} size={size} />
              <TeaserFigure data={this.state.data[1]} canvas={this.props.sequence[1].canvas} region={region} size={size} />
            </div>
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
