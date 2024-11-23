// const { log } = require('console');
const express = require('express');
const app = express();

app.use(express.json())

const path = require("path")

const bodyparser = require("body-parser")

// app.use(bodyparser.urlencoded({ extended: false}))

//importing router
const router = require("./userRouter")

app.use("/api/v1",router)

app.get('/', (req, res) => {

    //this will send to the path of the api written in actin of the form
    //we have to include path

    res.sendFile(path.join(__dirname)+"/index.html")

    // res.send('<h1>Hello, world!</h1>');

    // res.json(
    //     {
    //         name: "Hamza",
    //         email: "sample@gmail.com",
    //         password: "hexed"
    //     }
    // )
});

// app.post("/api/v1/register", (req,res)=>{

//     // const username = req.body.name


//     // res.send(
//     //     `Done <h1>Mr. ${req.body.name}</h1> <h2> ypour email is ${req.body.email} </h2> <h3>your password is ${req.body.password}</h3>`)

//     const username = req.body.name;
//     const useremail = req.body.email;
//     const userpassword  = req.body.password;

//     res.json({

//         success: true,
        
//     })


//     console.log(req.body);
    
// })

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
