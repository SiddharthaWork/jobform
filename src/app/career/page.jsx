"use client"

import React from 'react'
import { useState } from 'react';


const test = [
    {
        id: 1,
        title: "Software Engineer",
        description: "We are looking for a software engineer with 2 years of experience in React and Node.js."
    },
    {
        id: 2,
        title: "Software Engineer",
        description: "We are looking for a software engineer with 2 years of experience in React and Node.js."
    },
]




const page = () => {

    const [count, setCount] = useState(0);

    const onClick = () => {
        alert("clicked");
        setCount(count + 1);
    }



  return (
    <div className='flex justify-center items-center flex-col gap-4 w-full h-screen'>
        {test.map((item) => (
            <div key={item.id} className='flex items-center justify-center flex-col gap-4'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}


        <button onClick={onClick} className='bg-white text-black px-4 py-2 rounded-md border border-black'>Click count {count}</button>


    </div>
  )
}

export default page;