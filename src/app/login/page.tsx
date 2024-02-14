"use client"
import React from "react"
import Link from "next/link"

export default function LoginPage(){

    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl">Login Page</h1>
        <br/>
     
          <label>Email</label>
        <input 
        type="email"
        className="p-2 border-gray-100 rounded-lg"
        id="email"
        value={user.username}
        onChange={e => setUser({...user,email:e.target.value})}
        placeholder="Enter Your Email"
        />
          <label>Password</label>
        <input 
        type="password"
        className="p-2 border-gray-100 rounded-lg"
        id="Password"
        value={user.username}
        onChange={e => setUser({...user,password:e.target.value})}
        placeholder="Enter Your Password"
        />
        <br/>
        <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        Login
        </button>
        <Link href="/signup">Visit Signup Page</Link>
         </div>
    )
}

