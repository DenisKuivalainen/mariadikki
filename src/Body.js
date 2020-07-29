import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import {C} from './Color';
import MainBg from './MainBg';
import About from './About';
import Gallery from './Gallery';

import './css/Body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main" style={this.getBG(1)}>
        <MainBg />
        <ScrollableAnchor id={'about'}>
          <About date={this.props.date} />
        </ScrollableAnchor>
        <ScrollableAnchor id={'gallery'}>
          <Gallery/>
        </ScrollableAnchor>
      </div>
    )
  }

  getBG(opt) {
    return ({backgroundColor: C(this.props.date, opt)})
  }
}

export default Body;