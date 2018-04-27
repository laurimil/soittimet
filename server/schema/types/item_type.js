const mongoose = require('mongoose');
const graphql = require ('graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType
} = graphql;

const Item = mongoose.model('item');

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: () =>({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt },
    maker: { type: GraphQLString },
    year: { type: GraphQLInt },
    user: {
      type: require('./user_type'),
      resolve(parentValue){
        return Item.findById(parentValue).populate('user')
          .then(item => {
            console.log(item);
            return item.user;
          });
      }
    }
  })
});

module.exports = ItemType;
