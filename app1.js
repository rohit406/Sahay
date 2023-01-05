const express = require("express");
require("dotenv").config();
require("./models/db");

const User = require("./models/user");

const app1 = express();

// app1.use((req,res,next)=>{
//     req.on('data',(chunk)=>{
//         console.log(JSON.parse(chunk));
//     })
//     next();
// });
app1.use(express.json());
app1.get('/test',(req,res)=>{
    res.send('Hello world');
});

const email='rohit@234.com'

app1.post("/create-user", async (req, res) => {
    res.json(req.body);
    const isNewUser=await User.isThisEmailInUse(email);
    if(!isNewUser)
    return res.json({
        success:false,
        message: 'This email is already taken'
    });
  const user = await User({
    fullname: "Rohit",
    email: email,
    password: "1234",
  });
  await user.save();
  res.json(user);
});

app1.get("/", (req, res) => {
  res.send("Hello world");
});

app1.listen(8000, () => {
  console.log("port is listening");
});

// mongodb+srv://rohitangral:<password>@sahay.qcj7ael.mongodb.net/?retryWrites=true&w=majority
