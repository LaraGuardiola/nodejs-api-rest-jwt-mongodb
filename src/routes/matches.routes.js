import { Router } from 'express'
const router = Router()

import * as matchesCtrl from '../controllers/matches.controller.js'
import { verifyToken } from '../middlewares' //validates token and it's payload (the id to check if the user exists)

//each time user goes to /matches route, will get all the matches served by the controller (we use the reference of the getMatches function)
router.get('/', matchesCtrl.getMatches)

router.post('/', verifyToken, matchesCtrl.createMatch)

router.get('/:matchId', matchesCtrl.getMatchById)

router.put('/:matchId', verifyToken, matchesCtrl.updateMatchById)

router.delete('/:matchId', verifyToken, matchesCtrl.deleteMatchById)

export default router;