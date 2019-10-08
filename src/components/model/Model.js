import React from 'react';

const Model = ({ model }) => {
  return (
    <div className='model'>
      <h3>
        {model}
        <span role='img' aria-label='clap'>
          👏
        </span>
      </h3>
    </div>
  );
};

export default Model;
