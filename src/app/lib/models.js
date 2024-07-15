const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    user_mail: {
        type: String,
        required: true,
    },
    user_password_hash: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },

}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User",userSchema)