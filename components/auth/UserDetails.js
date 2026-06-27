import React from 'react'

export default function UserDetails({user, handleLogout}) {
  return (
    <div className='absolute top-16 right-0 bg-gray-50/70 border border-gray-100 p-5 shadow-lg rounded-lg backdrop-blur-xl'>

      <div className='flex flex-col items-end gap-2'>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button
          onClick={handleLogout}
          className="gradient-button"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
