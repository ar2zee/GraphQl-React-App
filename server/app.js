const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');


const schema = require('./schema/schema');
const MLAB_CRED = require('./credentials');
const {login, password} = MLAB_CRED;

const app = express();

xapp.use(cors());

mongoose.connect(`mongodb://${login}:${password}@ds153699.mlab.com:53699/react-planner`,  {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
    schema, // === schema: schema 
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening port 4000...')
});