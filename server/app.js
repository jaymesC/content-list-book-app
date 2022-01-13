const express = require('express');
const graphqlHTTP = require('express-graphql');
const scema = require('./schema/schema')

app.use('/graphql', graphqlHTTP({
    schema

}));

const app = express();

app.listen(4000, () => {
    console.log('now listening on request on port 4000');
})