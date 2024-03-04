
import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RestaurantApp"
    })
    .then(() => {
        console.log("DATABASE CONNECTED SUCCESSFULLY!");
    })
    .catch(err => {
        console.log("DATABASE FAILED TO CONNECT");
        console.error(err);
    });
};

export default dbConnection;
