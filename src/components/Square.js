import React from 'react';

export default function Square(props) {
  const style = {
    backgroundColor: props.color,
    width: '16.666%',
    maxWidth: '150px',
    paddingTop: '16.6666%',
  };
  return (
    <div className="Square" style={style} onClick={props.changeColor}></div>
  );
}
