import React, { useState } from 'react';
import './styles/main.sass';
import Test from './components/Gradients';
import GithubLink from './components/githubLink/GithubLink';

function App() {
  const [gradientType] = useState(['Linear Gradient', 'Radial Gradient']);

  let circleArray = [];
  for (let i = 0; i < gradientType.length; i++) {
    circleArray.push(<Test key={i} gradient={gradientType[i]} />);
  }

  return (
    <>
      <GithubLink />
      <div className='App'>{circleArray}</div>
      <footer
        className='footer'
        style={{
          color: 'black',
          width: '100%',
          textAlign: 'center',
          fontSize: '14px'
        }}
      >
        Created by Mohit Aggarwal with Love{' '}
        <span role='img' aria-label='heart' className='heart'>
          ❤️
        </span>
      </footer>
    </>
  );
}

export default App;
