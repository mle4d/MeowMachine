import React, { Component } from 'react';
import meow1 from './assets/meow1';
import meow2 from './assets/meow2';

const audioMap = {
  meow1: {
    keyCode: 188,
    name: 'meow1',
    src: './assets/meow1.mp3'
  },
  meow2: {
    keyCode: 222,
    name: 'meow2',
    src: './assets/meow2.mp3'
  }
};
export default class App extends Component {

  audio1 = React.createRef();
  audio2 = React.createRef();

  state = {
    playing: ''
  }

  play = audioId => {
    const ref = this[audioId];
    this.setState({ playing: audioMap[audioId].name });
    ref.current.src = audioMap[audioId].src;
    ref.current.currentTime = 0;
    ref.current.play();
  }

  keyDown = event => {
    console.log(Object.entries(audioMap));
    const entry = Object.entries(audioMap).find(n => n[1].keyCode === event.keyCode);
    this.play(entry[0]);
  }

  render() {
    return (
      <section onKeyDown={this.keyDown}>
        <h1>{this.state.playing}</h1>
        <Button audioRef={this.audio1} name="audio1" play={this.play} />
        <Button audioRef={this.audio2} name="audio2" play={this.play} />
      </section>
    );
  }
}

function Button({ audioRef, name, play }) {
  return (
    <>
      <button onClick={() => play(name)}>{name}</button>
      <audio ref={audioRef} />
    </>
  );
}
