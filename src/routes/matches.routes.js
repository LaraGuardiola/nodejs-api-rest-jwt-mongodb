import { Router } from 'express'
const router = Router()

import * as matchesCtrl from '../controllers/matches.controller.js'

//each time user goes to /matches route, will get all the matches served by the controller (we use the reference of the getMatches function)
router.get('/', matchesCtrl.getMatches)

router.post('/', matchesCtrl.createMatch)

router.get('/:matchId', matchesCtrl.getMatchById)

router.put('/:matchId', matchesCtrl.updateMatchById)

router.delete('/:matchId', matchesCtrl.deleteMatchById)

export default router;