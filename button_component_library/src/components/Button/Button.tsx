import React from 'react'
interface ButtonProps {
    label: string;
  }

const Button = (props: ButtonProps) => {
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{props.label}</button>
    </div>
  )
}

export default Button