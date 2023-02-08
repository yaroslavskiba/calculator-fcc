import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [operator, setOperator] = useState('');

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
  const operators = ['AC', '/', '*', '-', '+', '=']


  function clear() {
    setFirstNum('');
    setSecondNum('');
    setDisplay('0');
    setOperator('');
  }

  function calculate(numbers, operator) {
    let result = 0;
    for (let i=0; i<numbers.length; i++) {
      let number = parseFloat(numbers[i]);
      if (i === 0) {
        result = number;
        continue;
      }
      switch (operator) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          result /= number;
          break;
        default:
          return null;
      }
    }
    return result;
  }
  
  function handle(e) {
    if(e === '=') {
      const numbers = display.split(/[\+\-\*\/]/);
      const result = calculate(numbers, operator);
      setDisplay(result);
      return;
    }
    
    if (operators.includes(e)) {
      setDisplay(`${display} ${e} `);
      switch (e) {
        case 'AC':
          return clear();
        case '/':
        case '*':
        case '+':
        case '-':
          return setOperator(e);
          default:
          break;
       }
    }
    display === '0' ? setDisplay(`${e}`) : setDisplay(`${display}${e}`);
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