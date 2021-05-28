import React, { Component } from 'react';

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
        return (
          <div>
            <span>{this.state.data[0].label.en[0]}</span>
            <span>{this.state.data[1].label.en[0]}</span>
          </div>
        )
      } else {
        return null
      }
    } else {
      return null
    }

  }

}

export default Teaser;
