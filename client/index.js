import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import { Router, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';


import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import ItemCreate from './components/ItemCreate';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import ItemEdit from './components/ItemEdit';

const link = new HttpLink({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Router history={hashHistory}> */}
      <Router>
        <div>
          <Route path="/" component={App}>
            <Route path="list" component={ItemList} />
            <Route path="login" component={LoginForm} />
            <Route path="signup" component={SignupForm} />
            <Route path="dashboard" component={requireAuth(Dashboard)} />
            <Route path="items/new" component={requireAuth(ItemCreate)} />
            <Route path="items/:id" component={ItemDetail} />
            <Route path="user/items/:id" component={ItemEdit} />
          </Route>
        </div>
      </Router>
      {/* </Router> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
