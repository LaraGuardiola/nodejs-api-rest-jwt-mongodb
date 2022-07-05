import { Router } from 'express'
const router = Router()

import * as matchesCtrl from '../controllers/matches.controller.js'
import { authJwt } from '../middlewares' //validates token and it's payload (the id to check if the user exists)

//each time user goes to /matches route, will get all the matches served by the controller (we use the reference of the getMatches function)
router.get('/', matchesCtrl.getMatches)

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isModerator
], matchesCtrl.createMatch)

router.get('/:matchId', matchesCtrl.getMatchById)

router.put('/:matchId', [
    authJwt.verifyToken, 
    authJwt.isAdmin
], matchesCtrl.updateMatchById)

router.delete('/:matchId', [
    authJwt.verifyToken, 
    authJwt.isAdmin
], matchesCtrl.deleteMatchById)

export default router;