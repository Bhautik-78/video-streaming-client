import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <h1>Hello</h1>
        <video id="videoPlayer" controls>
          <source src="http://localhost:8000/video" type="video/mp4" />
        </video>
      </div>
  )
}

export default App;
