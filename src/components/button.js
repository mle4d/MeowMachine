import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';



function Button({ meowRef, name, play, image }) {
  return (
    <>
      <button style={{ backgroundImage: (image) }} onClick={() => play(name)}>{name}</button>
      <audio ref={meowRef} />
    </>
  );
}

Button.propTypes = {
  meowRef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  image: PropTypes.string
};

export default Button;
