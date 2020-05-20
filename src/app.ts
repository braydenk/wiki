import express from 'express';
import mongoose, { Schema } from 'mongoose';

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind('console', 'connection error:'))
db.once('open', () => 'connected to db')


const userSchema: Schema = new Schema({
  name: String
})

interface UserSchema extends Document {
  name: string
}
const User = mongoose.model<UserSchema>('User', userSchema)


const user = new User('john')
console.log(user)


const app = express();

app.set('port', process.env.PORT || 3000);

export default app;
