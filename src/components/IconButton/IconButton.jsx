import React from "react";
import PropTypes from "prop-types";
// import './IconButton.scss';
import { IconButtonItem } from "./IconButton.styled";
const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconButtonItem type="button" onClick={onClick} {...allyProps}>
    {children}
  </IconButtonItem>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  // 'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
