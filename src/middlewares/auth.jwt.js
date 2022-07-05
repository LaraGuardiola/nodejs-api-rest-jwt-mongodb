import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/User.js'

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