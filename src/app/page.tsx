'use client'
import React from 'react'
import useUserServices from './redux/services/user.service'

const Page = () => {
  const {counter,decrement,increment}=useUserServices()
  return (
    <div className='flex flex-col'>
     <h1 className='text-center'>      counter:{counter}</h1>
      <button onClick={() => {
        increment()
      }}>increment</button>
      <button onClick={()=>decrement()}>decrement</button>
    </div>
  )
}

export default Page