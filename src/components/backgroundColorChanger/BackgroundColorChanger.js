import React, { useState } from 'react'
import './BackgroundColorChanger.css'

const BackgroundColorChanger = () => {

  const [colorName, setColorName] = useState("#000000")

  const changeColor = ()=>{
    const getColor = generateColor();
    setColorName(getColor)
  }
  const generateColor = ()=>{
    let scheme = '0123456789ABCDEF';
    let color = "#";
    for(let i=0; i<6;i++){
color += scheme[Math.floor(Math.random()*16)]
    }
    return(color)
  }
  return (
    <div style={{backgroundColor:colorName}} className='bg-container'>
        <button onClick={changeColor} style={{color:colorName}}>Click Me</button>
    </div>
  )
}

export default BackgroundColorChanger