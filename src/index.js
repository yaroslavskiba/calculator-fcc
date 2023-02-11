import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [cur, setCur] = useState('');
  const [display, setDisplay] = useState('0');
  console.log(cur)

  const buttons = [
    { name: 'AC', id: 'clear' },
    { name: '/', id:"divide" },
    { name: '*', id: 'multiply' },
    { name: '7', id: 'seven' },
    { name: '8', id: 'eight' },
    { name: '9', id: 'nine' },
    { name: '-', id: 'subtract' },
    { name: '6', id: 'six' },
    { name: '5', id: 'five' },
    { name: '4', id: 'four' },
    { name: '+', id: 'add' },
    { name: '3', id: 'three' },
    { name: '2', id: 'two' },
    { name: '1', id: 'one' },
    { name: '0', id: 'zero' },
    { name: '.', id: 'decimal' },
    { name: '=', id: 'equals' }
  ];

  function equal() {
    const reg = /[+*\/-]/g
    const nums = display.split(reg);
    const operators = display.split(/[1-9\.0]/g)
      .filter(i => i !== '');
    let result = +nums[0];
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result += +nums[i+1];
          break;
        case '-':
          result -= +nums[i+1];
          break;
        case '*':
          result *= +nums[i+1];
          break;
        case '/':
          result /= +nums[i+1];
          break;
        default:
          return result;
      }
    }
    return setDisplay(String(result));
  }

  function clear() {
    setCur('');
    return setDisplay('0');
  }

  function handle(e) {
    if (e === 'AC') return clear();

    if (e === '=') {
      clear();
      return equal();
    }

    if (e === '-' || e === '+' || e === '*' || e === '/') {
      setCur('');
      return setDisplay(display + e);
    }

    if (display === '0') {
      if (e === '.') {
        setCur(cur + e);
        return setDisplay(display + e);
      }
      setCur(e);
      return setDisplay(e)
    }
    if (e === '.') {
      const reg = /\./
      if (reg.test(cur)) {
        return;
      }
      setCur(cur + e);
      return setDisplay(display + e);
    }
    setCur(cur + e);
    return setDisplay(display + e);
  }

  return (
    <>
      <div className='calculator'>
        <p className='display' id='display'>
          {display}
        </p>
        <div className='buttons-container'>
          {buttons.map((buttonName, index) => <button key={buttonName.name} id={buttonName.id} className={`button-${index + 1} button-style`} onClick={() => handle(buttonName.name)}>{buttonName.name}</button>)}
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