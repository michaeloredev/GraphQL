
//grabbing required dependencies to use for requests
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//creating express app
const app = express();

//allow cross origin requests
app.use(cors())

//connect to mlab
mongoose.connect('mongodb+srv://michael_ore:test123@graphqltutorial.ahrs3.mongodb.net/test');
mongoose.connection.once('open',() => {
    console.log('connected to database')
})

//creating master endpoint (middleware), that will be passed to graph QL for handdling **this must contain a schema**
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

//local host set to port 4000 with console log return
app.listen(4000, () => {
    console.log('now listening to requests on port 4000')
});

