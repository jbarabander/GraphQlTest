var GraphQLType = require('graphql/type');
var GraphQLObjectType = GraphQLType.GraphQLObjectType;
var GraphQLString = GraphQLType.GraphQLString;
var GraphQLEnumType = GraphQLType.GraphQLEnumType;
var GraphQLList = GraphQLType.GraphQLList;

var CategoryEnum = new GraphQLEnumType({
  name: 'categories',
  values: {
    SPORTS: {value: 0},
    MOVIES: {value: 1},
    VIDEO_GAMES: {value: 2},
    ANIMALS: {value: 3},
    MUSIC: {value: 4},
    MISC: {value: 5},
    FOOD: {value: 6}
  }
});

var InterestType = new GraphQLObjectType({
  name: 'Interest',
  fields: {
    name: GraphQLString,
    category: new GraphQLList(CategoryEnum)
  }
})

module.exports = InterestType;
