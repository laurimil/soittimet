import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { Link, hashHistory } from 'react-router';
import mutation from '../mutations/logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }
  onBoardClick(){
    hashHistory.push('/dashboard')
  }
  renderButtons(){
    const { loading, user } = this.props.data;
    if(loading){ return <div />;}

    if (user) {
      return (
        <div>
          <li><a onClick={this.onBoardClick.bind(this)}>User</a></li>
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
      )
    }
  }
  render() {
    return (
      <nav>
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
