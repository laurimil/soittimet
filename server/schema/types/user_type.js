const graphql = require('graphql');
const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const ItemType = require('./item_type');
const User = mongoose.model('user');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID},
    email: { type: GraphQLString },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parentValue) {
        return User.findItems(parentValue.id);
      }
    }
  })
});

module.exports = UserType;
