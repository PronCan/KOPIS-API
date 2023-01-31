import './common.scss'
import './App.css';
// import React, {useEffect, useRef} from 'react';
import MusicalContent from './Musical_content';
import MusicalMain from './Musical_main';

function App() {
  return (
    <div className="App">
      <MusicalContent />
      <MusicalMain />
      {/* <p className='testjson'>{getData2()}</p> */}
    </div>
  );
}

export default App;
