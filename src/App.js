import React from 'react';

import Head from './Head';
import Body from './Body';

import {LangContext} from './LangContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
      lng: true,
    };
    this.setLang = this.setLang.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  setLang() {
    this.setState({lng: !this.state.lng});
  }

  render() {
    return (
      <LangContext.Provider value={this.state.lng ? 1 : 2}>
        <Head date = {this.state.date} getLang={this.setLang}/>
        <Body date = {this.state.date}/>
      </LangContext.Provider>
    );
  }
}


export default App;


// https://di-is-godlike.imgbb.com/albums