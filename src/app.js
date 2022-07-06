import express from 'express';
import morgan from 'morgan';
//import pkg from '../package.json' assert { type: "json" };
import {createRoles} from './libs/initialSetup.js'
import matchesRoutes from './routes/matches.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'


const app = express();
createRoles()

//app.set('pkg', pkg);

//MIDDLEWARES

//prints in console the verb of the http request and its http code
app.use(morgan('dev'));
app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        name: 'test',
        author: 'Sergio',
        description: 'test-api',
        version: '1.0.0'
    })
})


app.use('/api/matches', matchesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app;