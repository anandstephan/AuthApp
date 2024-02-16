"use client"
import React from "react"
import Link from "next/link"
import axios from "axios"
export default function SignupPage(){

    const [user,setUser] = React.useState({
        username:"",
        email:"",
        password:"",
    })
    const onSignup = async () =>{
      console.log("kkk",user)
      const response = await axios.post("/api/users/signup",user)
      console.log(response)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl">Signup Page</h1>
        <br/>
        <label>UserName</label>
        <input 
        type="text"
        className="p-2 border-gray-100 rounded-lg text-black"
        id="username"
        value={user.username}
        onChange={e => setUser({...user,username:e.target.value})}
        placeholder="Enter Your UserName"
        />
          <label>Email</label>
        <input 
        type="email"
        className="p-2 border-gray-100 rounded-lg text-black"
        id="email"
        value={user.email}
        onChange={e => setUser({...user,email:e.target.value})}
        placeholder="Enter Your Email"
        />
          <label>Password</label>
        <input 
        type="password"
        className="p-2 border-gray-100 rounded-lg text-black"
        id="Password"
        value={user.password}
        onChange={e => setUser({...user,password:e.target.value})}
        placeholder="Enter Your Password"
        />
        <br/>
        <button 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onSignup}
        >
        Signup
        </button>
        <Link href="/login">Visit Login Page</Link>
         </div>
    )
}