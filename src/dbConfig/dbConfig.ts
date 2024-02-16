import mongoose from "mongoose"
export async function connect(){
    try {
        // console.log(process.env.MONGO_URI)
         await mongoose.connect("mongodb+srv://anandstephan98:1234567890@cluster0.fkiwdei.mongodb.net/authapp")
            const connection = mongoose.connection
            connection.on("connected",()=>{
                console.log("MongoDB Connected Succesfully")
            })
            connection.on("error",(err:any) =>{
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
            })
        
    } catch (error) {
            console.log("Something went wrong!!!",error)
    }
}