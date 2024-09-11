import React from 'react'
interface ButtonProps {
    label: string;
  }

const Button = (props: ButtonProps) => {
  return (
    <div>
        <button style={{backgroundColor:"#4F75FF", color:"#fff" , padding: "15px 32px" , fontSize: "16px",}}>{props.label}</button>
    </div>
  )
}

export default Button