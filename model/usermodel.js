import { Schema, model as _model } from 'mongoose';

const User = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    age: { type: String, required: true},
    
},{collection: 'userdata'})

const UserData = _model('UserData', User);

export default UserData;