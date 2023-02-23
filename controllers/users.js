// import { v4 as uuid } from 'uuid';//uuid is a unique id generator
// import mongoose from "mongoose";

// import User from '../model/usermodel.js';

// let users = [];
// export const getUsers = async (req, res) => {
//     //console.log(`Users in the database: ${users}`);
//     try{
//         const user=await User.find()
//         res.json(user)
         
//     }catch(err){
//         res.status(500).json({message: err.message}) //500 is internal server error
//     }
    
//     //res.send(users);
// }


// export const createUser = async (req, res) => {   

//     try{
//         //insert into db
//         const user = await User.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age:req.body.age
//         })
//         /*
//         const user = new User.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age:req.body.age
//         })
//         try{
//             const newUSER = await user.save()
//         }
//         */

//         res.status(201).json(user) //201 means succesfully created object
//     }catch(err){
//         res.status(400).json({message: err.message}) // if user dun pass in age, names ,bad data,fail  400 is bad request , wrong with client not server
//     }

//     //users.push({...user, id: uuid()});
    
//     //console.log(`User [${user.username}] added to the database.`);
// };

// //middleware function
// export async function getUser(req, res,next) {
//     let user;
//     //res.send(req.params.id)
//     try{
//         const user = await User.findById(req.params.id)
//         if(user == null){
//             return res.status(404).json({message: "Cannot find user"}) //return  so that if no user , leave the function . it wont continue
//         }

//     }catch(err){
//         res.status(500).json({message: err.message}) //500 is internal server error
//     }
//     res.user = user 
//     next() //this is a middleware so that delete user and update function can use
// };


// //get one
// export const getUserById = async (req, res) => {
//     res.json(res.user)
// }

// export const deleteUser = async (req, res) => { 
//     /*
//     console.log(`user with id ${req.params.id} has been deleted`);
//     try{
//         await User.deleteOne({ _id: req.params.id })
//         res.json({ message: "User Deleted" })
//     }catch (err){
//         res.send(err)
//     }
//     //users = users.filter((user) => user.id !== req.params.id);
//     */
//    res.user
// };

// export const updateUser =  (req,res) => {
//     const user = users.find((user) => user.id === req.params.id);
    
//     user.username = req.body.username;
//     user.age = req.body.age;

//     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// };