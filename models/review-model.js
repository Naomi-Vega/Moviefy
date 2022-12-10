const { Schema, model } = require ("mongoose")

const reviewSchema = new Schema ({
    rating: Number,
    review: String,
    movie: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    }
})

const reviewModel = model ("Review", reviewSchema)

module.exports = reviewModel