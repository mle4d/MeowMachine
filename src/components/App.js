import React, { Component } from 'react';
import Button from './button';
import meow1 from './assets/meows/meow1.mp3';
import meow2 from './assets/meows/meow2.mp3';
import meow3 from './assets/meows/meow3.mp3';
import meow4 from './assets/meows/meow4.mp3';
import meow5 from './assets/meows/meow5.mp3';
import meow6 from './assets/meows/meow6.mp3';
import meow7 from './assets/meows/meow7.mp3';
import meow8 from './assets/meows/meow8.mp3';
import meow9 from './assets/meows/meow9.mp3';
import cat1 from './assets/cats/cat1.png';
import cat2 from './assets/cats/cat2.png';
import cat3 from './assets/cats/cat3.png';
import cat4 from './assets/cats/cat4.png';
import cat5 from './assets/cats/cat5.png';
import cat6 from './assets/cats/cat6.png';
import cat7 from './assets/cats/cat7.png';
import cat8 from './assets/cats/cat8.png';
import cat9 from './assets/cats/cat9.png';
import './app.css';

const meowMap = {
  meow1: {
    name: 'meow1',
    src: meow1,
    image: cat1
  },
  meow2: {
    name: 'meow2',
    src: meow2,
    image: cat2,
  },
  meow3: {
    name: 'meow3',
    src: meow3,
    image: cat3
  },
  meow4: {
    name: 'meow4',
    src: meow4,
    image: cat4
  },
  meow5: {
    name: 'meow5',
    src: meow5,
    image: cat5,
  },
  meow6: {
    name: 'meow6',
    src: meow6,
    image: cat6
  },
  meow7: {
    name: 'meow7',
    src: meow7,
    image: cat7
  },
  meow8: {
    name: 'meow8',
    src: meow8,
    image: cat8
  },
  meow9: {
    name: 'meow9',
    src: meow9,
    image: cat9
  }
};
export default class App extends Component {

  meow1 = React.createRef();
  meow2 = React.createRef();
  meow3 = React.createRef();
  meow4 = React.createRef();
  meow5 = React.createRef();
  meow6 = React.createRef();
  meow7 = React.createRef();
  meow8 = React.createRef();
  meow9 = React.createRef();

  state = {
    playing: ''
  }
  
  play = meowId => {
    const ref = this[meowId];
    this.setState({ playing: meowMap[meowId].name });
    ref.current.src = meowMap[meowId].src;
    ref.current.currentTime = 0;
    ref.current.play();
  }
  
  
  render() {
    const meowArr = [this.meow1, this.meow2, this.meow3, this.meow4, this.meow5, this.meow6, this.meow7, this.meow8, this.meow9];
    // const catsArr = [this.cat1, this.cat2, this.cat3, this.cat4, this.cat5, this.cat6, this.cat7, this.cat8, this.cat9];
    const buttonList = meowArr.map((meow, i) => {
      return <Button image={meowMap[`meow${i + 1}`].image} key={i} meowRef={meow} name={`meow${i + 1}`} play={this.play} />;
    });
    
    return (
      <section>
        {buttonList}
      </section>
    );
  }
}

