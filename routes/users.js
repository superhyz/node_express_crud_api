import express from 'express';
import User from '../model/usermodel.js';
//import { getUsers, createUser,getUser, deleteUser, updateUser, getUserById } from '../controllers/users.js';

const router = express.Router();

router.get('/', async (req, res) => {
    //console.log(`Users in the database: ${users}`);
    try{
        const user=await User.find()
        res.json(user)
         
    }catch(err){
        res.status(500).json({message: err.message}) //500 is internal server error
    }
}
);

router.post('/',  async (req, res) => {   

    try{
        //insert into db
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age:req.body.age
        })
        /*
        const user = new User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age:req.body.age
        })
        try{
            const newUSER = await user.save()
        }
        */

        res.status(201).json(user) //201 means succesfully created object
    }catch(err){
        res.status(400).json({message: err.message}) // if user dun pass in age, names ,bad data,fail  400 is bad request , wrong with client not server
    }

    //users.push({...user, id: uuid()});
    
    //console.log(`User [${user.username}] added to the database.`);
    }
);

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




router.get('/:id', async(req, res) => {
    try{
        const data = await User.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


router.delete('/:id', async(res,req)=>{
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.patch('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message }) 
    }
});

export default router;




