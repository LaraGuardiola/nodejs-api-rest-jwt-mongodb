//we need to import the schema and model from mongoose
import pkg from 'mongoose'
const {model, Schema} = pkg

const matchSchema = new Schema({
    category: String,
    gameMode: String,
    blueGoals: Number,
    orangeGoals: Number
}, {
    timestamps: true, //each time we post a match we get the time it was done
    versionKey: false
})

export default model('match', matchSchema)