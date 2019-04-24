import React from 'react'

const Button=(props)=>{
    return (
<div>
{console.log(props)}

    <button  className={`${props.className}`} style={{padding:`${props.padding}`,fontSize:`${props.fontSize}`,
    color:`${props.color}`,background:`${props.background}`,borderRadius:`${props.borderRadius}`,
    border:`${props.border}`,margin:`${props.margin}`,cursor:`${props.cursor}`

}} onClick={props.onClick}>{props.buttontext} <img src={props.url}/></button>
</div>
    )

}


export default  Button 


