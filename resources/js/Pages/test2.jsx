import React from 'react';
import FadeInContent from './test_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fade In / Fade Out Animation</h1>
      </header>
      <FadeInContent>
        <div className="content">
          <p style={{height:'100vh'}}>This content will fade in when scrolled down.</p>
          <p>HEllo World</p>
        </div>
      </FadeInContent>
    </div>
  );
}

export default App;
