import React from 'react';

import {C} from './Color';
import {Text} from './Text';
import {LangContext} from './LangContext';

import './css/Head.css';
// const LangContext = React.createContext(1);

class Head extends React.Component {
    constructor(props) {
      super(props);
    }
    static contextType = LangContext;

    render() {
        return(
            <div style={{position:"relative"}}>
                <div className="head">
                    <nav>
                        <ul>
                            <li><a href="#about" id = "1"
                            onMouseEnter={this.mEnter}
                            onMouseLeave={this.mLeave}
                            >{Text(0, this.context)}</a></li>
                            <li><a href="#gallery" id = "2"
                            onMouseEnter={this.mEnter}
                            onMouseLeave={this.mLeave}
                            >{Text(1, this.context)}</a></li>
                            <li><a href="https://di-is-godlike.imgbb.com/albums" id = "3"
                            onMouseEnter={this.mEnter}
                            onMouseLeave={this.mLeave}
                            >{Text(2, this.context)}</a></li>
                            <li><a href="https://di-is-godlike.imgbb.com/albums" id = "4"
                            onMouseEnter={this.mEnter}
                            onMouseLeave={this.mLeave}
                            >{Text(3, this.context)}</a></li>
                        </ul>
                    </nav>
                    <a className="btn" onClick={() => this.props.getLang()}>{Text(4, this.context)}</a>
                </div>
            </div>
        )
    }

    mEnter = event => {
        let m = event.target;
        m.style.color = this.getColor(m.id)
    }

    mLeave = event => {
        let m = event.target;
        m.style.color = "#000000"
    }

    getColor(id) {
        return C(this.props.date, 4)
    }
}

export default Head;