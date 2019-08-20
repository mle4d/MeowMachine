import React, { Component } from 'react';
import meow1 from './assets/meow1';
import meow2 from './assets/meow2';
import meow3 from './assets/meow3';
import meow4 from './assets/meow4';
import meow5 from './assets/meow5';
import meow6 from './assets/meow6';
import meow7 from './assets/meow7';
import meow8 from './assets/meow8';
import meow9 from './assets/meow9';

const meowMap = {
  meow1: {
    keyCode: 111,
    name: 'meow1',
    src: './assets/meow1.mp3'
  },
  meow2: {
    keyCode: 222,
    name: 'meow2',
    src: './assets/meow2.mp3'
  },
  meow3: {
    keyCode: 333,
    name: 'meow1',
    src: './assets/meow3.mp3'
  },
  meow4: {
    keyCode: 444,
    name: 'meow4',
    src: './assets/meow4.mp3'
  },
  meow5: {
    keyCode: 555,
    name: 'meow5',
    src: './assets/meow1.mp3'
  },
  meow6: {
    keyCode: 666,
    name: 'meow6',
    src: './assets/meow6.mp3'
  },
  meow7: {
    keyCode: 777,
    name: 'meow7',
    src: './assets/meow7.mp3'
  },
  meow8: {
    keyCode: 888,
    name: 'meow8',
    src: './assets/meow8.mp3'
  },
  meow9: {
    keycode: 999,
    name: 'moew9',
    src: './assets.meow9.mp3'
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

  keyDown = event => {
    console.log(Object.entries(meowMap));
    const entry = Object.entries(meowMap).find(n => n[1].keyCode === event.keyCode);
    this.play(entry[0]);
  }

  render() {
    return (
      <section onKeyDown={this.keyDown}>
        <h1>{this.state.playing}</h1>
        <Button audioRef={this.meow1} name="meow1" play={this.play} />
        <Button audioRef={this.meow2} name="meow2" play={this.play} />
      </section>
    );
  }
}

function Button({ meowRef, name, play }) {
  return (
    <>
      <button onClick={() => play(name)}>{name}</button>
      <audio ref={meowRef} />
    </>
  );
}
