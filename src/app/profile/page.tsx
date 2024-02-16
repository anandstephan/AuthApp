"use client"
import {useRouter} from 'next/navigation'
import  axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'



export default  function Profile(){
    const route = useRouter()
    const [data,setData] = useState('nothind')

    async function getUserDetails(){
        const response = await axios.get("/api/users/me")
        console.log(response.data.data)
        setData(response.data.data._id)
    }
  

    const  logout = async () =>{
        const response =   await axios.get("/api/users/logout")   
        console.log("🚀 ~ logout ~ response:", response)
        route.push("/login")
    }

    return  <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
    <h1 className="text-2xl">Profile Page</h1>
    <h2>{data === "nothing" ? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
    <button
    className="mt-4 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-600 bg-teal-500"
    onClick={getUserDetails}
   >
        User Details</button>


    <button
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-orange-600 bg-orange-500"
    onClick={logout}
   >
        Logout</button>
    </div>
}