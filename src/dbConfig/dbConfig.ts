import mongoose from "mongoose"

export async function dbConfig(){
    try {
         await mongoose.connect("")
            const connection = mongoose.connection
            connection.on("connected",()=>{
                console.log("MongoDB Connected Succesfully")
            })
            connection.on("error",(err) =>{
                console.log(err)
            })
        
    } catch (error) {
            console.log("Something went wrong!!!")
    }
}