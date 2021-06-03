import React, { Component } from 'react';

class TeaserFigure extends Component {

  render() {

    const {data, region, size} = this.props

    const src = data.items[0].items[0].items[0].body[0].service['@id'] + '/' + region + '/' + size + '/0/default.jpg'
    const alt = data.label.en[0]


    return (
      <React.Fragment>
        <div>
          <img src={src} alt={alt} />
        </div>
      </React.Fragment>
    )

  }

}

export default TeaserFigure;
