import React from 'react'
function Splitter(props){
    const height = props.height;
    return (
        <div style={{display: 'block', width: '100%', height: `${height}px`}}></div>
    )
}

export default Splitter;