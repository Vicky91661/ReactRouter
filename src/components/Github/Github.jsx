import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Vicky91661').then((response)=>response.json()).then((data)=>{
    //         // console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()
  return (
      <div className='bg-slate-700 text-white font-bold text-3xl p-4 text-center'>Github Followers : {data.followers}
          <img src={data.avatar_url} alt="Git Picture" />
      </div>
      
  )
}

export const GithubLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/Vicky91661')
    return response.json()
}