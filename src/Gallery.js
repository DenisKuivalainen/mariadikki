import React from 'react';

import Pictures from './Pictures';

import './css/Body.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <Pictures />
            </div>
        )
    }
}

export default Gallery;