const graphql = require ('graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType
} = graphql;

const UserType = require('./user_type');

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: {
    id: { type: GraphQLID },
    // user: {
    //   type: UserType,
    //   resolve(parentValue, args){
    //     axios.get(`mongodb://kirppis:soitinkirppis68742@ds141796.mlab.com:41796/soitin/users/${parentValue.userId}`)
    //   }
    // },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    maker: { type: GraphQLString },
    year: { type: GraphQLInt }
  }
});

module.exports = ItemType;
