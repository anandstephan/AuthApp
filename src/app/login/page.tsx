"use client"
import React from "react"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/navigation";

export default function LoginPage(){
  const router = useRouter()

    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

      const onLogin =async () =>{
  
        try {

          const response = await axios.post("/api/users/login", user);
          console.log("Login success", response.data);

          router.push("/profile");
      } catch (error:any) {
          console.log("Login failed", error.message);

      }
      }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl">Login Page</h1>
        <br/>
     
          <label>Email</label>
        <input 
        type="email"
        className="p-2 border-gray-100 rounded-lg text-black"
        id="email"
        value={user.username}
        onChange={e => setUser({...user,email:e.target.value})}
        placeholder="Enter Your Email"
        />
          <label>Password</label>
        <input 
        type="password"
        className="p-2 border-gray-100 rounded-lg text-black"
        id="Password"
        value={user.username}
        onChange={e => setUser({...user,password:e.target.value})}
        placeholder="Enter Your Password"
        />
        <br/>
        <button 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        onClick={onLogin}
        >
        Login
        </button>
        <Link href="/signup">Visit Signup Page</Link>
         </div>
    )
}

