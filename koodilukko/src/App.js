import { useState } from 'react';
import './App.css';
import Codelock from './components/Codelock';
import LockClosed from './icons/LockClosed';
import LockOpen from './icons/LockOpen';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Koodilukko</h1>
      </header>
      <body>
        <div className='lockstatus-container'>
          {
            isOpen ?
              <LockOpen></LockOpen>
              :
              <LockClosed></LockClosed>
          }
        </div>
        <Codelock setIsOpen={setIsOpen}></Codelock>
      </body>
    </div>
  );
}

export default App;
