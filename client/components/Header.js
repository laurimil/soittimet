import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import mutation from '../mutations/logout';
import query from '../queries/currentUser';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import InputIcon from '@material-ui/icons/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const ButtonLink = (props) => {
  const { primary, to, icon} = props;
  return (
      <Button component={Link} to={to}>
        {primary}
        {icon}
      </Button>
  );
};

ButtonLink.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography 
            variant="title" 
            color="inherit"
            >
            SOITTIMET.NET
          </Typography>
          {this.props.data.user && (
            <div>
              <ButtonLink to="/dashboard" primary="DashBoard" icon={<AccountCircle />} />
              <Button primary="Logout" onClick={this.onLogoutClick} icon={<InputIcon />} />
            </div>
          )}  
          {!this.props.data.user && (
            <div>
              <ButtonLink to="/signup" primary="SignUp" icon={<InputIcon />} />
              <ButtonLink to="/login" primary="Login" icon={<InputIcon />} />
            </div>
         )}
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

Header = withStyles(styles)(Header);

export default graphql(mutation)(
  graphql(query)(Header)
);
