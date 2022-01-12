const express = require('express');
const graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    
}));

const app = express();

app.listen(4000, () => {
    console.log('now listening on request on port 4000');
})