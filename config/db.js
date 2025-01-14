const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //console.log('URI de conexión:', process.env.MONGO_URI); //Verificando

        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,    // ya no son necesarias en las versiones más recientes del driver de MongoDB para Node.js:
            // useUnifiedTopology: true,//
        });
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error.message);
        process.exit(1); // Finaliza el proceso si falla la conexión
    }
};

module.exports = connectDB;
