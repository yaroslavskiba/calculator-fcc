import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [cur, setCur] = useState('');
  const [display, setDisplay] = useState('0');
  console.log(display);

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


  //оно работает но это полный кринж :( чет меня понесло
  function equal() {
    // const regex = /[1-9.]/gm;
    // let fullList = [...display];
    // const copy = display;
    // const operatorsList = copy.split(regex)
    //   .filter(item => item !== '');
    // while (fullList.length !== 1){
    //   if (operatorsList.includes('*') || operatorsList.includes('/')) {
    //     const mul = fullList.indexOf('*');
    //     const div = fullList.indexOf('/');
    //     let current = mul > div ? mul : div;
    //     const start = fullList.slice(0, current - 1);
    //     const end = fullList.slice(current + 2)
    //     const calculateOne = fullList[current - 1];
    //     const calculateTwo = fullList[current + 1];
    //     const calculate = mul > div ? +calculateOne * +calculateTwo : +calculateOne / +calculateTwo;
    //     fullList = [...start, calculate, ...end];
    //   }
    //   const mul = fullList.indexOf('+');
    //   const div = fullList.indexOf('-');
    //   let current = mul > div ? mul : div;
    //   const start = fullList.slice(0, current - 1);
    //   const end = fullList.slice(current + 2)
    //   const calculateOne = fullList[current - 1];
    //   const calculateTwo = fullList[current + 1];
    //   const calculate = mul > div ? +calculateOne + +calculateTwo : +calculateOne - +calculateTwo;
    //   fullList = [...start, calculate, ...end];
    // }
    // return setDisplay(fullList.join(''));
    const result = eval(display)
    return setDisplay(result);
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

    if (display === '0') {
      if (e === '.') {
        setCur(cur + e);
        return setDisplay(display + e);
      }
      setCur(e);
      return setDisplay(e)
    }
    setCur(cur + e);
    return setDisplay(display + e)
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