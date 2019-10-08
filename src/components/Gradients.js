import React, { useState, useRef } from 'react';
import Model from './model/Model';
import Button from './cssCode/Button';

const Test = ({ gradient }) => {
  const [background, setBackground] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const pragraphRef = useRef(null);

  const fillColor = e => {
    setBackground(!background);
  };

  // Random color Generator method

  const randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let linearDegree = Math.floor(Math.random() * 360);

  let backColor = {};
  if (gradient === 'Linear Gradient') {
    backColor = {
      backgroundImage: `linear-gradient(${linearDegree}deg, ${randomColor()} 0%, ${randomColor()} 74%)`
    };
  } else {
    backColor = {
      backgroundImage: `radial-gradient(circle, ${randomColor()} 0%, ${randomColor()} 74%)`
    };
  }

  // Copy text on clip board
  const copyText = () => {
    pragraphRef.current.select();
    let successful = document.execCommand('copy');
    if (successful) setCopySuccess('Copied');
    setTimeout(() => {
      setCopySuccess('');
    }, 1200);
  };

  return (
    <div className='main'>
      <h1 className='heading'>{gradient}</h1>
      <div className='circle' style={backColor}></div>
      <div className='below-section'>
        <input
          ref={pragraphRef}
          value={`background-image: ${backColor.backgroundImage};`}
          onChange={copyText}
        />

        {/* Logical shortcut for only displaying the 
            button if the copy command exists */
        document.queryCommandSupported('copy') && (
          <p className='copy-text' onClick={copyText}>
            Copy Css{' '}
            <span role='img' aria-label='rainbow'>
              🌈
            </span>
          </p>
        )}

        <Button click={fillColor} />
      </div>
      {copySuccess ? <Model model={copySuccess} /> : null}
    </div>
  );
};

export default Test;
