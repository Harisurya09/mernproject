const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
}, ()=>{
    console.log('Product database got connected to backend server... please proceed with further operations')
})
