const express = require("express");
const mongoose = require("mongoose");
const productRouter =require ("./routes/productRoutes");
const userRouter =require("./routes/userRoutes");

const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

const mongoDbUrl = "mongodb+srv://tanmoy:dattatanmoy@cluster0.ac9nrds.mongodb.net/shopping_site?retryWrites=true&w=majority";
mongoose.connect(mongoDbUrl,{});
const db=mongoose.connection;
db.on("error", console.error.bind(console,"mongodb connection error:"));
db.once("open",()=>{
    console.log("connected to MongoDb!");

});
app.use(express.json());
app.use(productRouter);
app.use(userRouter);

// app.get("/hello", (req,res,next)=>{
//     res.send("hi this is tanmoy");
// });


app.listen(4000,"0.0.0.0",()=>{
    console.log("server started at port 4000");
});

