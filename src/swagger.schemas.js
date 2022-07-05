import User from './models/User.js';
import m2s from 'mongoose-to-swagger'

export const swaggerSchema = m2s(User)