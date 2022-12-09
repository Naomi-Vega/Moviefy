const express = require ("express")
const mongoose = require ("mongoose")
const userModel = require ("./models/user-model")
const cors = require ("cors")
const jwt = require ("jsonwebtoken")
const reviewModel = require ("./models/review-model")
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

app.post ("/favorite", async (req, res) => {
    const token = req.get("Authorization")
    try {
        const userData = jwt.verify(token, "Naomi")
        const user = await userModel.findById(userData.userId)
        user.favorites.push(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(500).json("You're not signed in")
    }
})

app.post ("/toWatch", async (req, res) => {
    const token = req.get("Authorization")
    try {
        const userData = jwt.verify(token, "Naomi")
        const user = await userModel.findById(userData.userId)
        user.toWatch.push(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(500).json("You're not signed in")
    }
})

app.post ("/watched", async (req, res) => {
    const token = req.get("Authorization")
    try {
        const userData = jwt.verify(token, "Naomi")
        const user = await userModel.findById(userData.userId)
        user.watched.push(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(500).json("You're not signed in")
    }
})

app.post ("/review", async (req, res) => {
    const token = req.get("Authorization")
    try {
        const userData = jwt.verify(token, "Naomi")
        const review = new reviewModel({
            rating: req.body.rating,
            review: req.body.review,
            movie: req.body.movie,
            user: userData.userId
        })
        await review.save()
        res.json(review)
    } catch (error) {
        res.status(500).json("You're not signed in")
    }
})

app.get ("/review/:movie", async (req, res) => {
    
    try {
        
        const reviews = await reviewModel.find({movie:req.params.movie})
        res.json(reviews)
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