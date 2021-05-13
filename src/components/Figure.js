import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Mirador from "./Mirador";
import mirador from "mirador";

class Figure extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { manifest } = this.props;

    this.setState({
      label: manifest.label.en[0],
      summary: manifest.summary.en[0],
      requiredStatementLabel: manifest.requiredStatement.label.en[0],
      requiredStatementValue: manifest.requiredStatement.value.en[0],
      media: manifest.items[0].items[0].items[0].body[0].service['@id'] + '/full/!300,300/0/default.jpg'
    })
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {

    let {label, summary, requiredStatementLabel, requiredStatementValue, media} = this.state

    return (
      <figure className="yith-figure">
        <div className="yith-figure--preview">
          <div className="yith-figure--preview--inner">
            <img src={media} />
            <a tabIndex="0"
               href="#"
               aria-label={`Expand ${label} in Viewer`}
               onClick={this.handleClick}>
              Expand in Viewer
              {this.state.active ? true : false}
            </a>
          </div>
        </div>
        <figcaption>
          <strong>{label}</strong>
          <p>{summary}</p>
          <em>{requiredStatementLabel}: {requiredStatementValue}</em>
        </figcaption>
      </figure>
    )

  }
}

export default Figure;
