import React from 'react';

function Button({ audioRef, name, play }) {
  return (
    <>
      <button onClick={() => play(name)}>{name}</button>
      <audio ref={audioRef} />
    </>
  );
}
