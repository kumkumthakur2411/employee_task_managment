import React from 'react'
import { Heading } from '../Others/Heading'
import { TaskListNumber } from '../Others/TaskListNumber'
import { TaskList } from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (
    <div className='px-10 py-5'>
        <Heading ></Heading>
        <TaskListNumber/>
        <TaskList/>

    </div>
  )
}
