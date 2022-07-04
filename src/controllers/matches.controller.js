import Match from '../models/Match.js'

export const createMatch = async (req, res) => {
    
    const {category, gameMode, blueGoals, orangeGoals} = req.body

    const newMatch = new Match({
        category: category,
        gameMode: gameMode,
        blueGoals: blueGoals,
        orangeGoals: orangeGoals
    })

    //it's asynchronous because it takes some time to post a new match
    const matchSaved = await newMatch.save()

    //status 201 means a post has been successful
    res.status(201).json(matchSaved)
}

export const getMatches = async (req, res) => {
    const matches = await Match.find()
    res.json(matches)
}

export const getMatchById = async (req, res) => {
    const match = await Match.findById(req.params.matchId)
    res.status(200).json(match)
}

export const updateMatchById = async (req, res) => {
    const updatedMatch = await Match.findByIdAndUpdate(req.params.matchId, req.body, {
        new: true
    })
    res.status(204).json(updatedMatch)
}   

export const deleteMatchById = async (req, res) => {
    const { matchId } = req.params
    await Match.findByIdAndDelete(matchId)
    res.status(204).json()
}

export const sayHello = () => {
    console.log('hello')
}