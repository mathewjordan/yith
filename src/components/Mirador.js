import React, { Component } from 'react';
import mirador from 'mirador';
import PropTypes from 'prop-types';

class Mirador extends Component {
  constructor(props) {
    super(props);

    this.miradorInstance = null;
  }

  handleInstance = (mode) => {
    const { config, plugins } = this.props;

    if (mode === 'initial' || mode === 'nextManifest' || mode === 'nextCanvas') {
      this.miradorInstance = mirador.viewer(config, plugins);
      this.panZoom(2000)
    } else if (mode === 'nextAnnotation') {
      this.panZoom(0)
    }
  }

  panZoom = (ms) => {

    if (this.props.autozoom) {

      const windowId = Object.keys(this.miradorInstance.store.getState().windows)[0];

      const region = this.props.region.split(",");

      const boxToZoom = {
        x: parseInt(region[0]),
        y: parseInt(region[1]),
        width: parseInt(region[2]),
        height: parseInt(region[3])
      };

      const zoomCenter = {
        x: boxToZoom.x + boxToZoom.width / 2,
        y: boxToZoom.y + boxToZoom.height / 2
      };

      var action = mirador.actions.updateViewport(windowId, {
        x: zoomCenter.x,
        y: zoomCenter.y,
        zoom: 0.61888 / boxToZoom.width
      });

      setTimeout(() => {
        this.miradorInstance.store.dispatch(action);
      }, ms);

    }

  }

  componentDidMount() {
    console.log(true)
    this.handleInstance(this.props.mode)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.handleInstance(this.props.mode)
  }

  render() {
    const { config } = this.props;
    return <div id={config.id} />;
  }
}

Mirador.propTypes = {
  config: PropTypes.string.isRequired,
  plugins: PropTypes.string.isRequired,
};

export default Mirador;
