import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  name: String;
}

const Button = (props: Props) => {
  return <div>Button ${props.name}</div>;
};

Button.propTypes = {
  name: String,
};

export default Button;
