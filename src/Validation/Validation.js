import React from 'react';

const Validation = (props) => {
return(
 <div>
     {  // this is a javascript code, so we need the parenthesis
props.length<6?
<p> the text is short</p>: 
<p> the text is long</p>
}

</div>

);
};

export default Validation;