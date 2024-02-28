import mongoose  from 'mongoose';



const Connection = async (username = 'disha_db', password = 'YnfG4MOnCDVSaCmQ') => {
const URL = `mongodb://${username}:${password}@ac-i2a9h04-shard-00-00.aibglic.mongodb.net:27017,ac-i2a9h04-shard-00-01.aibglic.mongodb.net:27017,ac-i2a9h04-shard-00-02.aibglic.mongodb.net:27017/?ssl=true&replicaSet=atlas-bu41av-shard-0&authSource=admin&retryWrites=true&w=majority&appName=google-doc-db`;
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;