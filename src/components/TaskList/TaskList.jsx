import React from 'react'

export const TaskList = () => {
  return (
    <div id='tasklist' className='w-full overflow-x-auto h-[45vh] mt-5 flex gap-5 justify-start item-center flex-nowrap py-5 '>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl p-5 '>
            <div className='flex justify-between items-center text-sm' >
                <h2 className='bg-red-600 p-2 font-bold rounded-xl '>high</h2>
                <h3>20-03-2025</h3>
            </div>
            <h1 className='font-bold text-2xl mt-2'>make a youtube video</h1>
            <p className='mt-5 text-sm'> Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Fuga 
                laboriosam vitae consectetur culpa 
                adipisci deserunt!</p>
        </div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
             <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400 rounded-xl '></div>
    </div>
  )
}
