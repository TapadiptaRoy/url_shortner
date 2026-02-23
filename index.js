const express=require('express');
const URL=require("./Models/url")
const path=require('path');
const urlRoute=require("./Routes/url")
const cors=require("cors");
const app=express();
const PORT=process.env.PORT || 5000;

const {connectDB}=require("./connect")

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.use("/",urlRoute);


connectDB('mongodb://localhost:27017/shorty_dev')
.then(()=>console.log("DB is connected"))
.catch((err) => console.log(err))
app.listen(PORT,()=>
   console.log(`SERVER STARTED AT port : ${PORT}`));
