import {Router} from 'express'
import * as authCtrl from '../controllers/auth.controller.js'
import { verifySignup } from '../middlewares'
const router = Router()

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     parameters:
 *      - in: body
 *        name: auth
 *        description: New auth
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/signup', [
    verifySignup.checkDuplicateUsernameOrEmail, 
    verifySignup.checkRolesExisted
], authCtrl.signUp)

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     parameters:
 *      - in: body
 *        name: auth
 *        description: New auth
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/signin', authCtrl.signIn)


export default router;