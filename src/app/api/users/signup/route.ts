    import {connect} from '@/dbConfig/dbConfig'
    import User from '@/models/userModel'
    import { NextRequest,NextResponse } from 'next/server'
    import bcryptjs from 'bcryptjs'

    connect()

export async function POST(request:NextRequest){
   
    try {
        const reqBody = await request.json()
        const {email,username,password} = reqBody
        const user =await  User.findOne({email})
        if(user){

            return NextResponse.json({error:"User Already Exsists"},{status:400})
        }
        
        //hashPassword
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser = new User({email,username,password:hashedPassword})
        const savedUser = await newUser.save()  
        return NextResponse.json({message:"User Signup Successfully"},{status:200})
    
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}