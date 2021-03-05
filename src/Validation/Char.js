import React from 'react';

const Char = (props) => {
    const myStyle = {
        display: 'inline-block',
        padding: '15px',
        margin : '16px',
        color: 'red'

    }
return(
 <div style={myStyle} onClick={props.clicked}>
     {props.character}
</div>

);
};

export default Char;