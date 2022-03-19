const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter your firstname!"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "Please enter your lastname!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/ybrayevweb/image/upload/v1646380040/ybrayevweb/avatardefault_92824_flgnd4.png"
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)