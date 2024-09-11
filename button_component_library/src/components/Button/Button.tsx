import React from 'react'
interface ButtonProps {
    label: string;
  }

const Button = (props: ButtonProps) => {
  return (
    <div>
        <button className='btn'>{props.label}</button>
    </div>
  )
}

export default Button