import React from 'react'

export const CreateTask = () => {
  return (
    
    <div className='px-5 py-4  h-[48%] w-full bg-[#1c1c1c]'>
      <form className='flex justify-between items-start w-full flex-wrap'>
        <div className=' px-5 w-2/5 h-full  '>
        <h3 className='font-semibold'>task title</h3>
        <input className='mb-2 w-full bg-transparent border-2 px-2 rounded' type="text" placeholder='make a ui design'/>
        <h3 className='font-semibold'>date</h3>
        <input className='mb-2 w-full bg-transparent border-2 px-2 rounded' type="date" />
        <h3 className='font-semibold'>assign to</h3>
        <input className='mb-2 w-full bg-transparent border-2 px-2 rounded' type="text" placeholder='employee name'/>
        <h3 className='font-semibold'>category</h3>
        <input className='mb-2 w-full bg-transparent border-2 px-2 rounded' type="text" placeholder='design, dev, etc.' />       
        </div>

        <div className='w-2/5 h-full flex flex-col px-10'>
            <h2 className='font-semibold'>descrption</h2>
            <textarea className="bg-transparent border-2 " name="" id=""  rows={6}></textarea>
            <button className='mt-5 p-2 bg-green-500 rounded'>create a task</button>
        </div>
      </form>

    </div>
  )
}
