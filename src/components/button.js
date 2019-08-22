import React from 'react';
import PropTypes from 'prop-types';
import './button.css';




function Button({ meowRef, name, play, image }) {
  return (
    <>
      <button className="hi" style={{ backgroundImage: `url(${image})` }} onClick={() => play(name)}></button>
      <audio ref={meowRef} />
    </>
  );
}

Button.propTypes = {
  meowRef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired
};

export default Button;
