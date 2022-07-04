import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body

    const newUser = new User({
        username: username,
        email: email,
        password: await User.encryptPassword(password),
    })

    const userSaved = await newUser.save()

    //signing the token with jwt
    const token = jwt.sign({id: userSaved.id},config.SECRET,{
        expiresIn: 86400 //24 hours
    })

    res.status(201).json({token})

}

export const signIn = async (req, res) => {
    res.json('signin')
}