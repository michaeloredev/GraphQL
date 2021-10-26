const graphql = require('graphql');
// const { assertValidSDL } = require('graphql/validation/validate');
const _ = require('lodash');

//grabbing properties from the graphql package
const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
  ]

const authors =  [
    {name: 'Patrick Rothfuss', age: 44, id:"1"},
    {name: 'Brandon Sanderson', age: 42, id:"2"},
    {name: 'Terry Pratchett', age: 66, id:"3"},
]

//defining the first object type
//this object has 3 diff fields that are wrapped in a function
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        genre:{type :GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:() => ({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        age:{type :GraphQLInt}
    })
});

//this is how we initally jump into graph, this also has an argument and resolve so you know what you are looking for,
//and what should happen when you find it
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                //code to get data from DB, or other source
                return _.find(books, {id:args.id});
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id:args.id})
            }
        }
    }
});

//we are exporting this schema, so it can be used by the app
module.exports = new GraphQLSchema({
    query:RootQuery
})