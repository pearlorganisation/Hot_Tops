import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const dealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required"]
    },
    banner: {
        type: String,
        required: [true, "Banner Image Required"]
    },
    sizes: {
        type: [sizeSchema],
        required: true
    },
    chooseItems: {
        type: [String],
        default: []
    },
    defaultItems: {
        type: [String],
        default: []
    },
    isPopular: {
        type: String,
    }




},{timeStamp:true});

export default mongoose.model('deals', dealSchema, 'deals');
