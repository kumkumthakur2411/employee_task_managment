import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword] =useState("");
    
    const onSumbitHandler= (e) =>{
        e.preventDefault()
        console.log("submited");
        console.log(`your email is ${email} and your password is ${password}`)

        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div className='px-10 py-20 border-2  rounded-[5vw]'>
            <form 
            id='123'
             onSubmit={(e)=>{
                onSumbitHandler(e)
            }}
            className='flex flex-col justify-center items-center ' >
                <input 
                required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className='w-full text-white text-xl outline-none bg-transparent border-b-2 border-green-500 rounded-full py-4 px-4 m-4 placeholder:text-grey-300' 
                name="email"
                type="email" placeholder='enter email' />
                <input 
                required
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='w-full text-white text-xl outline-none bg-transparent border-b-2 border-green-500 rounded-full py-4 px-4 m-4 placeholder:text-grey-300 '
                name='password'
                type="password" placeholder='enter password'/>
                <button className='w-full text-black text-xl outline-none bg-green-500  rounded-[2vw] py-2 px-2 m-4 placeholder:text-white'>login</button>
            </form>
        </div>
    </div>
  )
}
