import { Router } from 'express'
const router = Router()

import * as matchesCtrl from '../controllers/matches.controller.js'
import { authJwt } from '../middlewares' //validates token and it's payload (the id to check if the user exists)

//each time user goes to /matches route, will get all the matches served by the controller (we use the reference of the getMatches function)
/**
 * @swagger
 * /api/matches:
 *   get:
 *     description: All catchphrases
 *     responses:
 *       200:
 *         description: Returns all the catachphrases
 */
router.get('/', matchesCtrl.getMatches)

/**
 * @swagger
 * /api/matches:
 *   post:
 *     parameters:
 *      - in: body
 *        name: match
 *        description: New match
 *        schema:
 *          type: object
 *          properties:
 *            category:
 *              type: string
 *            gameMode:
 *              type: string
 *            blueGoals:
 *              type: number
 *            orangeGoals:
 *              type: number
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', [
    authJwt.verifyToken, 
    authJwt.isModerator
], matchesCtrl.createMatch)

/**
 * @swagger
 * /api/matches/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The match ID.
 *     description: Get a match by id
 *     responses:
 *       200:
 *         description: Returns the requested match
 */
router.get('/:matchId', matchesCtrl.getMatchById)

/**
 * @swagger
 * /api/matches/{id}:
 *   patch:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The match ID.
 *      - in: body
 *        name: match
 *        description: Update match
 *        schema:
 *          type: object
 *          properties:
 *            category:
 *              type: string
 *            gameMode:
 *              type: string
 *            blueGoals:
 *              type: number
 *            orangeGoals:
 *              type: number
 *     responses:
 *       204:
 *         description: Updated
 */
router.put('/:matchId', [
    authJwt.verifyToken, 
    authJwt.isAdmin
], matchesCtrl.updateMatchById)

/**
 * @swagger
 * /api/matches/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The match ID.
 *     description: Delete a match by id
 *     responses:
 *       200:
 *         description: Returns the requested match
 */
router.delete('/:matchId', [
    authJwt.verifyToken, 
    authJwt.isAdmin
], matchesCtrl.deleteMatchById)

export default router;