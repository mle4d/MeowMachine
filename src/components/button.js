import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
// import cat1 from './assets/cats/cat1.jpg';
// import cat2 from './assets/cats/cat2.jpg';
// import cat3 from './assets/cats/cat3.jpg';
// import cat4 from './assets/cats/cat4.jpg';
// import cat5 from './assets/cats/cat5.jpg';
// import cat6 from './assets/cats/cat6.jpg';
// import cat7 from './assets/cats/cat7.jpg';
// import cat8 from './assets/cats/cat8.jpg';
// import cat9 from './assets/cats/cat9.jpg';



function Button({ meowRef, name, play, image }) {
  // render() {
  //   const catsArr = [this.cat1, this.cat2, this.cat3, this.cat4, this.cat5, this.cat6, this.cat7, this.cat8, this.cat9];
  //   const imageList = catsArr.map((cats, i) => {
  return (
    <>
    <div id="flex-container">
      <button style={{ backgroundImage: (image) }} onClick={() => play(name)}></button>
      <audio ref={meowRef} />
    </div>
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
