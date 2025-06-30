import React from 'react'

export const TaskListNumber = () => {
  return (
    <div className='flex justify-between mt-10 gap-8'>
        <div className='bg-red-400 w-[25%] px-10 py-4 rounded-xl'>
         <h1 className='text-4xl font-bold '>0</h1>
         <h3 className='font-medium text-xl'>new task</h3>
        </div>
        <div className='bg-yellow-400 w-[25%] px-10 py-4 rounded-xl'>
         <h1 className='text-3xl text-bold '>0</h1>
         <h3 className='text-medium text-xl'>new task</h3>
        </div>
        <div className='bg-blue-400 w-[25%] px-10 py-4 rounded-xl'>
         <h1 className='text-3xl text-bold '>0</h1>
         <h3 className='text-medium text-xl'>new task</h3>
        </div>
        <div className='bg-green-400 w-[25%] px-10 py-4 rounded-xl'>
         <h1 className='text-3xl text-bold '>0</h1>
         <h3 className='text-medium text-xl'>new task</h3>
        </div>       
    </div>
  )
}
