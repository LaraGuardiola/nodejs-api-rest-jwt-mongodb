import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//import pkg from '../package.json' assert { type: "json" };
import {createRoles} from './libs/initialSetup.js'
import matchesRoutes from './routes/matches.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'


const app = express();
//createRoles() not necessary since it's been already created

//app.set('pkg', pkg);

//MIDDLEWARES

//prints in console the verb of the http request and its http code
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        name: 'rl-api-match-tracker',
        author: 'Sergio Lara Guardiola',
        description: 'RL match personal tracker',
        version: '1.0.0'
    })
})


app.use('/api/matches', matchesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app;