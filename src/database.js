import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

(async () => {
    try{
        const db = await mongoose.connect('mongodb+srv://joaquin:uUrWaMcSQTBdfKQt@clusterhbs.bhkypvy.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB connect to", db.connection.name);

    }catch(error){
        console.error(error);
    }
})();