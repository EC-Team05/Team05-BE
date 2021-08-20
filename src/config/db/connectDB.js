const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://NT:Nt123456@cluster0.rwyfz.mongodb.net/nail?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect MongoDB successfully');
    }
    catch (error) {
        console.log(console.error());
    }
}
module.exports = { connect };