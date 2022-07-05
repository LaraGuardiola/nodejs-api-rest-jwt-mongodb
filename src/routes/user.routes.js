import {Router} from 'express'
import * as userCtrl from '../controllers/user.controller.js'
import {authJwt, verifySignup} from '../middlewares'
const router = Router()

router.post('/', [
    verifySignup.checkRolesExisted,
    authJwt.verifyToken,
    authJwt.isAdmin,
], userCtrl.createUser)

export default router;