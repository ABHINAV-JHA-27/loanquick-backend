import mongoose from "mongoose";

const connectDB = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            dbName: "backend",
        })
        .then((c) =>
            console.log(`Database Connected with ${c.connection.host}`)
        )
        .catch((e) => console.log(e));
};

export default connectDB;
