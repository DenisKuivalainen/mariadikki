import React from 'react';
import useFitText from 'use-fit-text';

function Title(props) {
    const { fontSize, ref } = useFitText({ maxFontSize: 5000, minFontSize: 0.001});
    return(
        <div className="title" ref={ref} style={{fontSize, height: props.height}}>
            {props.title}
        </div>
    )
}

export default Title;