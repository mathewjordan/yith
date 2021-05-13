import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Mirador from "./Mirador";

class Preview extends Component {

  render() {

    console.log(this.props.manifest.items[0].items[0].items[0].body[0].service['@id'])

    return (
      <figure className="yith-preview">
        <div className="yith-preview--body">
          <figcaption>
            <strong>{this.props.manifest.label.en[0]}</strong>
            <p>{this.props.manifest.summary.en[0]}</p>
            <em>{this.props.manifest.requiredStatement.label.en[0]}: {this.props.manifest.requiredStatement.value.en[0]}</em>
          </figcaption>
        </div>
        <div className="yith-preview--canvas">
          <img src={this.props.manifest.items[0].items[0].items[0].body[0].service['@id'] + '/full/!300,300/0/default.jpg'} />
        </div>
        {/*<Mirador*/}
        {/*  config={{*/}
        {/*    id: 'mirador',*/}
        {/*    windows: [*/}
        {/*      {*/}
        {/*        loadedManifest: this.props.manifest.id,*/}
        {/*      },*/}
        {/*    ],*/}
        {/*    workspaceControlPanel: {*/}
        {/*      enabled: false,*/}
        {/*    },*/}
        {/*  }}*/}
        {/*  plugins={[]}*/}
        {/*/>*/}
      </figure>
    )

  }
}

export default Preview;
