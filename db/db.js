import mongoose from 'mongoose';

const dbConnection = async ()=> {
    try {
        const mongoDbConnection = await mongoose.connect(`${process.env.MONGODB_URI}apniLibrary`);
        console.log(mongoDbConnection.connection.host);
    } catch (error) {
        console.log("error connecting to MongoDb: " + error.message);
    }
}

export default dbConnection;