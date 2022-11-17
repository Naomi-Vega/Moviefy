const express = require ("express")
const mongoose = require ("mongoose")
const userModel = require ("./models/user-model")
const cors = require ("cors")
const jwt = require ("jsonwebtoken")

const app = express()

app.use(express.json())
app.use(cors())

app.post ("/register", async (req, res) =>{
    const emailExist = await userModel.findOne({email:req.body.email})
    if (emailExist){
        res.status(500).json("Email already exists")
        return
    }

    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    const token = jwt.sign({userId:user._id}, "Naomi",{expiresIn:"2d"})
    res.json({
        token, user
    })
})

app.post ("/signin", async (req, res) =>{
    const user = await userModel.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if (!user){
        res.status(500).json("Wrong email or password")
        return
    }
    const token = jwt.sign({userId:user._id}, "Naomi",{expiresIn:"2d"})
    res.json({
        token, user
    })

})

app.get ("/currentUser", async (req, res) => {
    const token = req.get("Authorization")
    try {
        const userData = jwt.verify(token, "Naomi")
        const user = await userModel.findById(userData.userId)
        res.json(user)
    } catch (error) {
        res.status(500).json("You're not signed in")
    }
})

async function startServer (){
    await mongoose.connect("mongodb+srv://NaomiVega:Naomi123@cluster0.c62ouri.mongodb.net/Moviefy?retryWrites=true&w=majority")
    app.listen(5000, () => {
        console.log ("server is running")
    })
}

startServer()