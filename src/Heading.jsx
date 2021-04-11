import React from "react";


const message="Hey bro!"
const cssStyle={};
cssStyle.color="blue";
function Heading()
{
    return <h1><span style={cssStyle}>{message}</span></h1>
}
export default Heading;