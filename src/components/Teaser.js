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
        if (typeof(this.state.data[0]) !== 'undefined') {

          let region = 'full';

          const itemA = this.state.data[0].items[0].items[0].items[0].body[0].service['@id'] + '/' + region + '/300,300/0/default.jpg'
          const itemB = this.state.data[1].items[0].items[0].items[0].body[0].service['@id'] + '/' + region + '/300,300/0/default.jpg'

          return (
            <React.Fragment>
              <img src={itemA} alt={this.state.data[0].label.en[0]} />
              <img src={itemB} alt={this.state.data[1].label.en[0]} />
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
