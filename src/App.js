import { useState } from 'react'
import './App.css';

function App() {

  let [tlist, setTList] = useState([]);
  let [tdate, setTDate] = useState([]);

  let [subject, setSubject] = useState([]);
  let [date, setDate] = useState([]);

  function handleClear(e) {
    e.preventDefault();
    setTList([]);
    setTDate([]);
    console.log(tlist, tdate);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTList(tlist.concat(subject));
    setTDate(tdate.concat(date));
    console.log(tlist, tdate);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClear} className='Clear'>Clear</button>
        <p>
          To-Do List
        </p>
        <div>
          <form className='Add-List'>
            <input 
              className='Input'
              placeholder='Subject'
              onChange={(e) => setSubject(e.target.value)}
            >
            </input>
            <input
              className='Input'
              placeholder='Due Date'
              onChange={(e) => setDate(e.target.value)}
            >
            </input>
            <button className='Button' onClick={handleSubmit}>&gt;</button>
          </form>
          <p>Result</p>
          <div className='Result'>
            <div>Subject{tlist}</div>
            <div>Date{tdate}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
