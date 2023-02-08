import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [display, setDisplay] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const buttons = ['AC', '/', '*', '7', '8', '9', '-', '6', '5', '4', '+', '3', '2', '1', '0', '.', '='];
  const operators = ['AC', '/', '*', '-', '+', '=']

  function handle(e) {
    if (operators.includes(e)) {
     switch (e) {
      case 'AC':
       return;
      case '/':
       return;
      case '*':
       return;
      case '+':
       return;
      case '-':
       return;
      case '=':
       return;
      default:
       break;
     }
    }
    return firstNum === 0 ? setFirstNum(+e) : setSecondNum(+e);
   }
   

  return (
    <>
      <div className='calculator'>
        <div className='display'>
          {display}
        </div>
        <div className='buttons-container'>
          {buttons.map((buttonName, index) => <button key={buttonName} className={`button-${index + 1} button-style`} onClick={() => handle(buttonName)}>{buttonName}</button>)}
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