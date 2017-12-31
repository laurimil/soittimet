const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphGLID
} = graphql;
const mongoose = require ('mongoose');
const Item = mongoose.model('item');
const ItemType = require('./types/item_type');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString}
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString}
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req});
      }
    },
    addItem: {
      type: ItemType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        maker: { type: GraphQLString },
        year: { type: GraphQLInt },
        price: { type: GraphQLInt },
      },
      resolve(parentValue, {title, description, price, maker, year} ){
        return (new Item({ title, description, price, maker, year })).save();
      }
    },
    editItem: {
      type: ItemType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        maker: { type: GraphQLString },
        year: { type: GraphQLInt },
        price: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return Item.editItem(args);
      }
    },
    removeItem: {
      type: ItemType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parentValue, {id}) {
        return Item.remove({_id:id});
      }
    }
  }
});

module.exports = mutation;
