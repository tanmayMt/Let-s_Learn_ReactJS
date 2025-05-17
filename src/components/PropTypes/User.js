import React from 'react';
import PropTypes from "prop-type"

const User = (props) => {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.userId}</p>
    </>
  );
};
// User.PropTypes = {
    
// };
export default User;
