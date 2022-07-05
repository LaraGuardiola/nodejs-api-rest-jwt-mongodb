import { ROLES } from '../models/Role.js'
import User from '../models/User.js'

//verifying if the email or username exists in the database
export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})

    if(user) return res.status(400).json({message: 'The user already exists'})

    const email = await User.findOne({email: req.body.email})

    if(email) return res.status(400).json({message: 'The email already exists'})

    next()
}   

//verifying if roles exist and continues or returns err message
export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let role of req.body.roles){
            if(!ROLES.includes(role)){
                return res.status(400).json({
                    message: `${role} does not exist`
                })
            }
        }
    }

    next()
}