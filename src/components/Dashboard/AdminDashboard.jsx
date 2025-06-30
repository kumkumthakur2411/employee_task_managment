import React from 'react'
import { Heading } from '../Others/Heading'
import { CreateTask } from '../Others/CreateTask'
import { AllTask } from '../Others/AllTask'

export const AdminDashboard = () => {
  return (
    <div className='px-10 py-2 w-full h-screen'>
        <Heading></Heading>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}
