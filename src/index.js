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
    { name: '=', id: 'equal' }
  ];
  const operators = ['AC', '/', '*', '-', '+', '=']


  function clear() {
    setFirstNum('');
    setSecondNum('');
    setDisplay('0');
    setOperator('');
  }

  function equal(a, b, operator) {
    a = +a;
    b = +b;
    let result;
    switch(operator){
      case '/':
        result = a / b;
        break;
      case '*':
        result = a * b;
        break;
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
      default:
        break;
    }
    console.log(a, b, result);
    setDisplay(result);
  }

  function handle(e) {
    if(e === '=') {
      return equal(firstNum, secondNum, operator);
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
    display === '0' ? setDisplay(`${e}`) : setDisplay(`${display}${e}`);;
    return operator === '' ? setFirstNum(`${firstNum}${e}`) : setSecondNum(`${secondNum}${e}`);
  }
   

  return (
    <>
      <div className='calculator'>
        <p className='display'>
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