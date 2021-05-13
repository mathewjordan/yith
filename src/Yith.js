import React, { Component } from 'react';

class Yith extends Component {

  constructor(props) {
    super(props);

    this.state ={
      data: null
    }
  }

  getManifest = (uri) => {
    fetch(uri, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          manifest: data
        });
      })
      .catch(err => console.error(this.props.url, err.toString()));

    return null
  }

  componentDidMount() {
    this.getManifest(this.props.manifest)
  }

  render() {

    return (
      <div>Yith</div>
    )

  }
}

export default Yith;
