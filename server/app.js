
//grabbing required dependencies to use for requests
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')

//creating express app
const app = express();



//creating master endpoint (middleware), that will be passed to graph QL for handdling **this must contain a schema**
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

//local host set to port 4000 with console log return
app.listen(4000, () => {
    console.log('now listening to requests on port 4000')
});

