import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  const { primary, to, icon} = props;
  return (
      <Button component={Link} to={to}>
        {primary}
        {icon}
      </Button>
  );
};

LinkButton.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default LinkButton;