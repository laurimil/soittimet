import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

class ItemForm extends Component {
  constructor(props) {
    super(props);

    const {title, description, maker, year, price } = props.item;
    console.log(props.item);

    this.state = { title, description, maker, year, price };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
  }
  onCancel(event){
    event.preventDefault();
    // console.log(this.props);
    this.props.history.push('/dashboard');
  }

  render() {
    const { classes } = this.props;

    return (

      <form className={classes.container} onSubmit={this.onSubmit.bind(this)}>
        <TextField
          id="title"
          name="title"
          placeholder="Otsikko"
          className={classes.textField}
          value={this.state.title}
          onChange={event => this.setState({title:event.target.value})}
          margin="normal"
          fullWidth
        />
        <TextField
          id="description"
          name="description"
          placeholder="Kuvaus"
          className={classes.textField}
          value={this.state.description}
          onChange={event => this.setState({description:event.target.value})}
          margin="normal"
          fullWidth
        />
        <TextField
          id="maker"
          name="maker"
          placeholder="Valmistaja"
          className={classes.textField}
          value={this.state.maker}
          onChange={event => this.setState({maker:event.target.value})}
          margin="normal"
          fullWidth
        />
        <TextField
          id="year"
          name="year"
          placeholder="Vuosi"
          className={classes.textField}
          value={this.state.year}
          onChange={event => this.setState({year:event.target.value})}
          margin="normal"
          fullWidth
        />
        <TextField
          id="price"
          name="price"
          placeholder="Hinta"
          className={classes.textField}
          value={this.state.price}
          onChange={event => this.setState({price:event.target.value})}
          margin="normal"
          fullWidth
        />
        <div className="errors">
          {this.props.errors.map(error => <div key={error}>{error}</div>)}
        </div>
        <Button 
          variant="raised" 
          color="secondary" 
          className={classes.button}
          type='button' 
          onClick={this.onCancel}
        >
          Cancel
        </Button>
        <Button 
          color="primary" 
          variant="raised" 
          className={classes.button}
        >
          Save
        </Button>
        {/* <button className="btn red" type='button' onClick={this.onCancel}>Cancel</button>
        <button className="btn right">Save</button> */}
      </form>
    );
  }
}

ItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
export default withStyles(styles)(ItemForm);
