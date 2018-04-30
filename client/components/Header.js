import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router-dom';
import mutation from '../mutations/logout';
import history from '../history';
import AppBar from 'material-ui/AppBar';

class Header extends Component {

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }
  
  renderButtons(){
    const { loading, user } = this.props.data;
    // console.log('Header ' + this.props.data.user);
    if(loading){ return <div />;}

    if (user) {
      return (
        <div>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
        </div>
        );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    return (
      
      <nav>
        <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>

      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
