import { Model, Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';





const userSchema = new Schema<IUser>(
    
    {


    id : {
        type : String,
        required : true,
        unique : true,

    },

    role : {
        type : String,
        required : true,

    },
    password : {
        type : String,
        required : true,
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
      },
      passwordChangedAt: {
        type: Date,
      },
    student : {
        type :Schema.Types.ObjectId,
        ref :'Stundent'
    },

    faculty:{
        type :Schema.Types.ObjectId,
        ref :'Faculty'
    },
    Admin:{
        type :Schema.Types.ObjectId,
        ref :'Admin'
    },


}, 
{
    timestamps : true,

})

 export const User = model<IUser, UserModel>('User', userSchema);