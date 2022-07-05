import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/User.js'
import Role from '../models/Role.js'

//verifies jwt
export const verifyToken = async (req, res, next)=> {
    try{
        const token = req.headers['x-access-token'];
    
        //if no token provided, return 403
        if(!token) return res.status(403).json({message: 'No token provided'})

        //verifies token
        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id

        const user = await User.findById(req.userId, {password: 0})

        //verifies if user is found on the db
        if(!user) return res.status(404).json({message: 'No user found'})

        next()
    }catch(err){
        return res.status(401).json({message: 'Unauthorized'})
    }
}

//verifies the role of the user
export const isModerator = async (req, res, next) => {
    //since the request has verified the token, req has access to the id of the user
    const user = await User.findById(req.userId)

    const roles = await Role.find({_id: {$in: user.roles}})

    //checks in the array of roles if the user is a moderator and continues
    for(let role of roles){
        if(role.name === 'moderator') {
            next()
            return;
        }
    }
    
    return res.status(403).json({message: 'Require moderator role'})
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)

    const roles = await Role.find({_id: {$in: user.roles}})

    for(let role of roles){
        if(role.name === 'admin') {
            next()
            return;
        }
    }
    
    return res.status(403).json({message: 'Require admin role'})
}