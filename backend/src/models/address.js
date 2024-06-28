import mongoose, { Types } from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        required:[true,"User Id is required! "]
    },
name:{
    type:String,
    required:[true,'Name is required!']
},
address:{
    type:String,
    required:[true,"Address is Required!"]
},
postCode:{
    type:String,
    required:[true,"Post Code is Required!"]
},
note:{
    type:String,
    required:[true,"Note is Required!"]
}
})

export default mongoose.model("address",addressSchema)