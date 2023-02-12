import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [cur, setCur] = useState('');
  const [display, setDisplay] = useState('0');
  const [nums, setNums] = useState([]);
  const [operators, setOperators] = useState([]);

  // useEffect(() => {
  //   setNums([...nums]);
  // }, [nums]);
  
  // useEffect(() => {
  //   setOperators([...operators]);
  // }, [operators]);

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

  function equal(nums, operators) {
    let result = Number(nums[0]);
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          if (typeof nums[i + 1] !== 'undefined') result += Number(nums[i+1]);
          break;
        case '-':
          if (typeof nums[i + 1] !== 'undefined') result -= Number(nums[i+1]);
          break;
        case '*':
          if (typeof nums[i + 1] !== 'undefined') result *= Number(nums[i+1]);
          break;
        case '/':
          if (typeof nums[i + 1] !== 'undefined') result /= Number(nums[i+1]);
          break;
        default:
          return result;
      }
    }
    return String(result);
  }


  function clear() {
    setOperators([]);
    setNums([]);
    setCur('');
    return setDisplay('0');
  }

  function handle(e) {
    if (e === 'AC') return clear();

    if (e === '-' && cur === '') {
      setCur(e);
      setDisplay(display + e);
      return;
    }

    if (e === '-' || e === '+' || e === '*' || e === '/' || e === '=') { 
      // нужно изменить  useState на обычную переменную. Асинхронность тут нахрен не нужна!
      setNums([...nums, cur]);
      if (e === '=') {
        const result = equal(nums, operators);
        setCur(result);
        setNums([]);
        setOperators([]);
        setDisplay(result);
        return;
      }
      setCur('');
      setOperators(prev => [...prev, e]);
      setDisplay(display + e);
      return;
    }

    if (display === '0') {
      if (e === '.') {
        setCur(cur + e);
        setDisplay(display + e);
        return;
      }
      setCur(e);
      setDisplay(e);
      return;
    }
    if (e === '.') {
      const reg = /\./
      if (reg.test(cur)) {
        return;
      }
      setCur(cur + e);
      setDisplay(display + e);
      return;
    }
    setCur(cur + e);
    setDisplay(display + e);
    return;
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