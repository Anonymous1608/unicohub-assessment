import React from 'react'

const Usercard = ({user}) => {
  return (
    
    
    <div className="p-2 rounded-md bg-gradient-to-b from-gray-900 to-gray-600 border">
      <p className="font-mono text-xl">{user.firstName + " " + user.lastName}</p>
      <img className='mx-auto' src={user.image} alt="image" />
      <div className="flex mt-5 justify-center items-center">
        <p>Age:- </p>
        <p>{user.age}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>Height:- </p>
        <p>{user.height}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>Email:- </p>
        <p>{user.email}</p>
      </div>
      <div className='flex justify-center items-center'>
        <p>Department:-</p>
        <p>{user.company.department}</p>
      </div>
    </div>
    
  )
}

export default Usercard
