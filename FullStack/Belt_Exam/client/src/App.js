import React, { useState } from 'react';
import Main from '../src/views/Main';
import { Router } from '@reach/router'

function App(){
  return (
    <div classname="App">
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;

