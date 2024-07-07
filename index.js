import express from 'express';
import dotenv from 'dotenv'
import dbConnection from './db/db.js';
import cors from "cors";




const app = express();

dotenv.config({
    path:'.env',
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


//logic for the router 
 import bookRoute from "./routes/book.route.js"
 import SignupRoute from "./routes/user.route.js"

 app.use('/book',bookRoute);
 app.use('/user',SignupRoute);
 



app.get('/', (req,res)=>{
res.send("Welcome")
})

dbConnection().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Failed to listen on port", err.message)
})