import React, { Component } from 'react';
import mirador from 'mirador';
import PropTypes from 'prop-types';

class Mirador extends Component {
  constructor(props) {
    super(props);
    this.miradorInstance = null;
  }

  componentDidMount() {
    const { config, plugins } = this.props;

    this.miradorInstance = mirador.viewer(config, plugins);
    this.miradorInstance.store.subscribe(() => {
      const state = this.miradorInstance.store.getState();
    });
    // Hacky example of waiting a specified time to add a window... Don't do this for real
    setTimeout(() => {
      this.miradorInstance.store.dispatch(
        this.miradorInstance.actions.addWindow()
      );
    }, 10000);
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
