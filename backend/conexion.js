const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection;

objetobd.on('connected', () => {
    console.log('✅ Conexión exitosa a MongoDB 🧮');
});

objetobd.on('error', () => {
    console.log('❌ Conexión fallida a MongoDB ☠️');
});

module.exports = mongoose;
