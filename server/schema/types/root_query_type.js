const graphql = require('graphql');
const { GraphQLObjectType , GraphQLID, GraphQLList, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const UserType = require('./user_type');
const ItemType = require('./item_type');
const Item = mongoose.model('item');
const User = mongoose.model('user');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve(){
        return User.find({});
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    item: {
      type: ItemType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, {id}) {
        return Item.findById(id);
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(){
        return Item.find({});
      }
    },
    // itemsByUser: {
    //   type: new GraphQLList(ItemType),
    //   args: { id { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parentValue, { id }) {
    //     return Item.findById(id);
    //     //maarittelematon viela
    //   }
    // }
  })
});

module.exports = RootQueryType;
