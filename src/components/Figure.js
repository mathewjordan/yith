import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Modal from "./Modal";

class Figure extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    const { manifest } = this.props;

    let region = 'full';
    if (this.props.region !== null) {
      region = this.props.region
    }

    this.setState({
      label: manifest.label.en[0],
      summary: manifest.summary.en[0],
      requiredStatementLabel: manifest.requiredStatement.label.en[0],
      requiredStatementValue: manifest.requiredStatement.value.en[0],
      media: manifest.items[0].items[0].items[0].body[0].service['@id'] + '/' + region + '/!640,640/0/default.jpg'
    })
  }

  yithModal() {
    if (this.state.active) {
      return <Modal iiif={this.props.manifest}
                    region={this.props.region}
                    autozoom={this.props.autozoom}
                    showModal={this.showModal} />
    }
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showModal();
  }

  showModal() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {

    let {label, summary, requiredStatementLabel, requiredStatementValue, media} = this.state

    return (
      <React.Fragment>
        <figure className="yith-figure">
          <div className="yith-figure--preview">
            <div className="yith-figure--preview--inner">
              <LazyLoad>
                <img src={media} />
              </LazyLoad>
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
        <div className={`yith-modal-wrapper yith-modal-${this.state.active}`}>
          {this.yithModal()}
        </div>
      </React.Fragment>
    )

  }
}

export default Figure;
