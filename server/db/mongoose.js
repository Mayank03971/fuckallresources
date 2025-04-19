// const mongoose = require('mongoose');

// let url;
// if (process.env.NODE_ENV) {
//    url = mongodb+srv://st957879:wHccQPervPAQeJmM@cluster0.cihzhxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
// } else {
//    url = require('./atlas');
// }
// mongoose.set('strictQuery', false);
// mongoose.connect(url, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// });
// wHccQPervPAQeJmM
const mongoose =require("mongoose");
const URI=process.env.MONGODB_URI;
// const URI="mongodb+srv://st957879:sarthak@cluster0.ap4ia.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async()=>{ 
    try{
await mongoose.connect(URI);
console.log("DB connect successfully")
    }catch(err){
        console.log("database connection failed");
process.exit(0);
        
    }
}
module.exports=connectDB;