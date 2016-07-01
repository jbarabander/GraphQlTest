var GraphQLType = require('graphql/type');
var GraphQLSchema = GraphQLType.GraphQLSchema;
var GraphQLObjectType = GraphQLType.GraphQLObjectType;
var GraphQLInt = GraphQLType.GraphQLInt;
var GraphQLList = GraphQLType.GraphQLList;
var GraphQLString = GraphQLType.GraphQLString;
var GraphQLNonNull = GraphQLType.GraphQlNonNull;
var GraphQLID = GraphQLType.GraphQLID;

var IntrestType = require('./Interest.js');

var FamilyType = new GraphQLObjectType({
  name: 'Family',
  description: 'Family schema',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: GraphQLInt},
    interests: {type: new GraphQLList(InterestType)}
  }
});

var FamilyQueryType = new GraphQLObjectType({
  name: 'FamilyQuery',
  fields: {
    members: {
      type: new GraphQLList(FamilyType),
      resolve: function (parent, args) {
        // fill in later
      }
    },
    member: {
      type: FamilyType,
      args: {
        id: {type: GraphQlString}
      },
      resolve: function (parent, args) {
        // fill in later
      }
    }
  }
})
