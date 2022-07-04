import User from '../models/User.js'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body

    const newUser = new User({
        username: username,
        email: email,
        password: await User.encryptPassword(password),
    })

    const userSaved = await newUser.save()
    console.log(newUser)
    res.status(201).json(userSaved)

}

export const signIn = async (req, res) => {
    res.json('signin')
}