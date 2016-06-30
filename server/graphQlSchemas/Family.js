var GraphQLType = require('graphql/type');
var GraphQLSchema = GraphQLType.GraphQLSchema;
var GraphQLObjectType = GraphQLType.GraphQLObjectType;
var GraphQLInt = GraphQLType.GraphQLInt;
var GraphQLList = GraphQLType.GraphQLList;
var GraphQLString = GraphQLType.GraphQLString;
var GraphQLNonNull = GraphQLType.GraphQlNonNull;

var IntrestType = require('./Interest.js');

var FamilyType = new GraphQLObjectType({
  name: 'Family',
  description: 'Family schema',
  fields: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: GraphQLInt},
    interests: {type: new GraphQLList(InterestType)}
  }
});
