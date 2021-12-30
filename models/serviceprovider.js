const mongoose = require("mongoose");

const serviceProvider = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    shopDescription: {
        type: String,
        required: true,
    },
    services: {
        type: Array,
        required: true,
    },
    paymentOptions:{
        type:Array,
        required:true,
      }
})
const serviceProviderModel = new mongoose.model("ServiceProviders", serviceProvider)
module.exports = serviceProviderModel;