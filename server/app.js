const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/grapghql', graphqlHTTP({

}));

app.listen(5000, () => {
    console.log('Port 5000 is listening...');
});


