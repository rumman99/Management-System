import mongoose from "mongoose";

const connectDB= async()=> {
    try{
        const connection= await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log('\n MongoDB Connected!!!', connection.connection.host);
    }
    catch(err){
        console.error("MongoDB Connection Error!!! ", err);
        process.exit(1)
    }
}

export default connectDB; 