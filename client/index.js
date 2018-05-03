import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, createNetworkInterface} from 'react-apollo';
import ApolloClient from 'apollo-boost';


import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import ItemCreate from './components/ItemCreate';
import ItemDetail from './components/ItemDetail';
import ItemList from './components/ItemList';
import ItemEdit from './components/ItemEdit';

// import history from './history';

const link = new HttpLink({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
       <Router>
        <div>
          <Route path="/" component={App} />
          <Route exact path="/" component={ItemList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/items/:id" component={ItemDetail} />
          <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
          {/* <Route path="/user/items/new" component={ItemCreate} /> */}
          <Switch>
            <Route path="/user/items/new" exact component={requireAuth(ItemCreate)} />
            <Route path="/user/items/:id" exact component={requireAuth (ItemEdit)} />
          </Switch>
        </div>
        </Router>
      </ApolloProvider>
    
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
