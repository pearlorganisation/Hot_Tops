import mongoose from "mongoose";

const orderSchema= new mongoose.Schema({
    orderType:{
        type:String,
        enum:["delivery","collection"],
        required:[true,"orderType is required!"]
    },
    address:{
        type:{},
        required: [true, "address is required!"]
        
    },
    time:{
        type:String,
        required:[true,"time is required!"]
    },
    totalAmount:{
        type:Number
    },
    orderBy:{
        type:mongoose.Types.ObjectId,
        ref:"auth",
        required:[true,"orderBy is required!"]
    },
    pizza:[
    { 
      pizzaName:{type:String},
      customization:[
        { name:String,
          price:Number
        }],
      size:{name:String,price:Number},
      base:{name:String,price:Number},
    }
    ],
    drink:[
        { name:String,
          drinkType:String,
          price:Number,
          }
    ],
    dips:[
        { name:String,
          dipType:String,
          price:Number,
        }
    ],
    sides:[{name:String,price:Number}],
    dessert:[{name:String,price:Number}],

},{timestamps:true})

orderSchema.methods.calculateTotalPrice = function() {
    let totalPrice = 0;

    // Calculate total price for pizza
    this.pizza.forEach((item) => {
        totalPrice += item.size.price;
        totalPrice += item.base.price;
        item.customization.forEach((custom) => {
            totalPrice += custom.price;
        });
    });

    // Calculate total price for drinks
    this.drink.forEach((drink) => {
        totalPrice += drink.price;
    });

    // Calculate total price for dips
    this.dips.forEach((dip) => {
        totalPrice += dip.price;
    });

    // Calculate total price for sides
    this.sides.forEach((side) => {
        totalPrice += side.price;
    });

    // Calculate total price for desserts
    this.dessert.forEach((dessert) => {
        totalPrice += dessert.price;
    });

    // Update the totalAmount field in the document
    this.totalAmount = totalPrice;
};

export default mongoose.model("order",orderSchema)