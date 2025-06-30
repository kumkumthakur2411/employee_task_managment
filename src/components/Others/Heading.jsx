import React from 'react'

export const Heading = () => {
  return (
    <div className='flex justify-between items-end w-full  px-6 py-5'>
        <h1 className='text-2xl text-medium'>hello<span className='font-extrabold'>,</span> <br/> <span className='text-4xl font-semibold'>kumkum👋</span> </h1>
        <button className='bg-red-400 p-2 text-lg font-semibold rounded'>log out</button>
    </div>
  )
}
