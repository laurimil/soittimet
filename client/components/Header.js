import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link } from 'react-router-dom';
import mutation from '../mutations/logout';

class Header extends Component {

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
    this.props.history.push('/');
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
      <header>
      <nav>
        <div className="nav-wrapper light-blue lighten-1">
          <Link to="/" className="brand-logo left">Soittimet.Net</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
