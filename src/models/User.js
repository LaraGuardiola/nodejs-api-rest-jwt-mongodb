import pkg from 'mongoose'
const { Schema, model } = pkg

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            ref: "Role",
            type: Schema.Types.ObjectId //related to the role schema
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

export default userSchema