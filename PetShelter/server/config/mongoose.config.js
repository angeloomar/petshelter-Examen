const { connect } = require('mongoose');

connect('mongodb://127.0.0.1/petshelter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('We are making some connections with the database!!!'))
    .catch(() => console.log('Ohhhh, something went wrong!'));