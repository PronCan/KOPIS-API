import './common.scss'
import './App.css';
// import React, {useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicalContent from './Musical_content';
import MusicalMain from './Musical_main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/thmu' element={<MusicalMain />}>aaaa</Route> */}
          <Route path='/' element={<MusicalMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
