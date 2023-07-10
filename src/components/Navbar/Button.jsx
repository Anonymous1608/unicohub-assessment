import React from 'react'

const Button = () => {
  return (
    
      <div className="flex gap-6">
      <button className="hover:scale-110 transition duration-300">
        Sign in
      </button>
      <button className="border hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out border-gray-500 rounded-md p-[2px] px-1">
        Sign up
      </button>
    </div>
  )
}

export default Button
