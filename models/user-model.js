const { Schema, model } = require ("mongoose")

const movieSchema = new Schema ({
    id: Number,
    title: String,
    overview: String,
    poster_path: String,
    release_date: String,
    genre_ids: [Number]
})

const userSchema = new Schema ({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    favorites:[
        movieSchema
    ],
    toWatch:[
        movieSchema
    ],
    watched:[
        movieSchema
    ]
})

const userModel = model ("User", userSchema)

module.exports = userModel
