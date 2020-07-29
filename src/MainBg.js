import React from 'react';

import './css/Body.css';

class MainBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: 0,
      vh: 0,
      vw: 0,
    };
    this.screenParam=this.screenParam.bind(this)
  }

  render() {
    return(
        <div className="main_bg">
            <img src="https://i.ibb.co/8jDqGT1/5-itogovy.png" alt="Background" className="main_pic" style={this.imageStyle()} />;
        </div>
    )
  }

  screenParam(){
    let xxx =  document.documentElement.clientWidth
    let h = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )
    let vh = document.documentElement.clientHeight
    this.setState({
        vw: xxx,
        h: h,
        vh: vh
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.screenParam);
    window.addEventListener('load', this.screenParam);
    // window.addEventListener('resize', this.imageStyle);
    // window.addEventListener('load', this.imageStyle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.screenParam);
    window.removeEventListener('load', this.screenParam);
    // window.removeEventListener('resize', this.imageStyle);
    // window.removeEventListener('load', this.imageStyle);
  }

  imageStyle() {
    let top = 20;
    let lft = 30;
    let w = 1969;
    let h = 1462;

    let k0 = w/h;
    let k1 = this.state.vw/this.state.vh;
    if(k0 > k1) {
        let mw = -(this.state.vh * w / h - this.state.vw) * lft / 100
        let kw = mw + "px";
        return ({marginLeft: kw, height: "100vh"})
    } else {
        let mh = -(this.state.vw * h / w - this.state.vh) * top / 100
        let kh = mh + "px";
        return ({marginTop: kh, width: "100vw"})
    }
  }
}

export default MainBg;