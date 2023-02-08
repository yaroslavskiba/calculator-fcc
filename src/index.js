import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [display, setDisplay] = useState('0');
  const buttons = ['AC', '/', 'x', '7', '8', '9', '-', '6', '5', '4', '+', '3', '2', '1', '0', '.', '='];
  return (
    <>
      <div className='calculator'>
        <div className='display'>
          {/* current state */}
          0
        </div>
        <div className='buttons-container'>
          {buttons.map((buttonName, index) => <button key={buttonName} className={`button-${index + 1} button-style`}>{buttonName}</button>)}
        </div>
      </div>
      <p className='text-author'>Designed and Coded By Yaroslav skiba</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
