import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect()

export async function POST(requsest:NextRequest){
 
    try {
            const reqBody = await requsest.json()
            const {email,password} = reqBody

            if(!email || !password){
                return NextResponse.json({error:"Please Send the email or Password"},{status:500})
            }
                const savedUser = await User.findOne({email})

           
                const validPassword = await bcryptjs.compare(password,savedUser.password)
                if(!validPassword){
                return NextResponse.json({error: "Invalid password"}, {status: 400})
                }
                const tokenData = {
                    id:savedUser._id,
                    username:savedUser.username,
                    email:savedUser.email
                }
                const token = await jwt.sign(tokenData,"testuser",{expiresIn:"1d"})
                const  response =  NextResponse.json({
                    message:"Login Successful",
                    success:true
                })
                response.cookies.set("token",token,{
                    httpOnly:true
                })
         
            
                return response
            

    } catch (error) {
     return NextResponse.json({error:error.message},{status:500})   
    }
}