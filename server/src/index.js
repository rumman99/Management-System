import dotenv from "dotenv";
import connectDB from "./db_config/db_config.js";
import app from "./app.js";

dotenv.config({path: './.env'});

connectDB()
.then(()=> {
    app.listen(process.env.PORT, ()=> {
        console.log(`Listening to PORT: ${process.env.PORT}`);
    })
})
.catch(err=> {
    console.log('Error in MongoDB Connection!!! ', err);
})