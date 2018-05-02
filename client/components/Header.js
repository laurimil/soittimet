import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import mutation from '../mutations/logout';
import query from '../queries/currentUser';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

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
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      
      // {/* <nav>
      //   <div className="nav-wrapper">
      //     <Link to="/" className="brand-logo left">Home</Link>
      //     <ul className="right">
      //       {this.renderButtons()}
      //     </ul>
      //   </div>

      // </nav> */}
      
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

Header= withStyles(styles)(Header);

export default graphql(mutation)(
  graphql(query)(Header)
);
