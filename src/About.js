import React from 'react';

import {C} from './Color';
import useFitText from 'use-fit-text';
import Title from './Title';

import './css/Body.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgH: 0,
      fullH: 0,
      aboutH: 0
    }
    this.getHeight=this.getHeight.bind(this)
  }

  render() {
    return(
      <div className="about">
          <div>
            <div className="title_text" style={({backgroundColor: C(this.props.date, 1)})}>
              <Title title="About" height="7vw"/>
            </div>
          </div>
          <div className="about_bg" style={({backgroundColor: C(this.props.date, 1)})}>
            <div className="about_margin1" style={{height: this.state.fullH}}>
              <div className="float_left" style={{height: this.state.imgH}}>
                <AboutText height={this.state.imgH} />
              </div>
              <div className="float_right">
                <img style={{height: this.state.imgH}} className="about_img" alt="zhora" src="https://sun9-72.userapi.com/c857536/v857536992/d6837/_A2ideNvFyc.jpg" />
              </div>
            </div>
          </div> 
          <div className="about_bg" style={({backgroundColor: C(this.props.date, 2)})}> 
            <div className="about_margin2">
              Хотите больше узнать обо мне или моем творчестве? Ищите меня в социальных сетях!
            </div>
          </div>
      </div>
    )
  }

  getBG(opt) {
    return ({backgroundColor: C(this.props.date, opt)})
  }

  componentDidMount() {
    window.addEventListener('resize', this.getHeight);
    window.addEventListener('load', this.getHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getHeight);
    window.removeEventListener('load', this.getHeight);
  }
  
  getHeight() {
    let w = 534;
    let h = 807;

    let vw = document.documentElement.clientWidth;
    vw = vw * (h / w)  * 0.25

    let a =  vw * 0.9;
    this.setState({imgH: a,
      fullH: vw,
      aboutH: (0.07*  document.documentElement.clientWidth)});
  }

  // getFullHeight() {
  //   this.setState({fullH: (this.state.imgH / 0.955)});
  // }

} 

function AboutText(props) {
  const { fontSize, ref } = useFitText({ maxFontSize: 5000, minFontSize: 0.001});
  return(
      <div className="about_text" ref={ref} style={{fontSize, height: props.height}}>
          Мария Дикки — художница из Москвы, которая не боится создавать откровенные и провокационные работы. Несмотря на её небольшой возраст, она уже делает успехи в творческом начинании и не стесняется писать картины, которые могут вызывать волнения. В конце-концов, это в её духе — делать что-то, что всегда находит отклик, и не бояться быть собой, особенно в творчестве.
          <br />Многие работы Марии носят откровенно сексуальный характер. Она не стесняется показывать людей такими, какие они есть, ведь Мария Дикки видит красоту во всём, даже в том, что многие считают недостатками.
      </div>
  )
}

export default About;

