import {Router} from 'express'
import * as userCtrl from '../controllers/user.controller.js'
import {authJwt, verifySignup} from '../middlewares/index.js'
const router = Router()

router.post('/', [
    verifySignup.checkRolesExisted,
    authJwt.verifyToken,
    authJwt.isAdmin,
], userCtrl.createUser)

export default router;