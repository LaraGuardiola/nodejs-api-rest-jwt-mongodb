import pkg from 'mongoose'
import bcrypt from 'bcryptjs'
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

//statics methods used to encrypt and compare the password
userSchema.statics.encryptPassword = async (password) => {
    return await new Promise((resolve, reject) => {
        //default amount of time encrypts (for performance)
        const saltRounds = 10
        bcrypt.hash(password, saltRounds,(err, hash) => {
            if(err) reject(err)
            resolve(hash)
        })
    })
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    //returns boolean
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User',userSchema)