const mongoose = require('mongoose')

const userSchma = new mongoose.Schema({
    userName :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true  
    },
autentication:{
    password:{
        type:String,
        require:true,
        select:false
    },
    salt:{
        type:String,
        require:true,
        select:false
    },
    sessionToken:{
        type:String,
        require:true,
        select:false
    }
}
})
export const UserModel = mongoose.model("Users",userSchma);

export const getUsers = () =>{
    UserModel.find()
}
export const getUserEmail = (email:String) =>{
    UserModel.findOne({email})
}
export const getUsersSecssionToken = (sessionToken:string) =>{
    UserModel.find({
        "autentication token": sessionToken
    })
}
export const GetUserBYId = (id:String) => {
    UserModel.findByid(id)
} 
export const createUsers = (values:Record<string,any>)=>{
    new UserModel(values)
    .save().then((users)=>{
        users.toObject()
    })
}
export const deletUser = (id:String)=>{
    UserModel.findOneAndDelete({_id:id})
    
}
export const update = (id,values:Record<string,any>) =>{
    UserModel.findByIdAndUpdate(id,values)
}
