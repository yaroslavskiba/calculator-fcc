import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='container'>
      <div className='calculator'>
        <div className='display'>
          {/* current state */}
        </div>
        {/* buttons */}
      </div>
      <span className='text-author'>Designed and Coded By Yaroslav skiba</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
