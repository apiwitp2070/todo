import { useState } from 'react'
import './App.css';

function App() {

  let [tlist, setTList] = useState([]);
  let [tdate, setTDate] = useState([]);

  let [subject, setSubject] = useState(null);
  let [date, setDate] = useState(null);

  function handleClear(e) {
    e.preventDefault();
    setTList([]);
    setTDate([]);
  }

  function handleClearForm() {
    document.getElementById("todoForm").reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!subject || !date) {
      alert('Pleast insert subject and date')
    }
    else if (date.match(/^[0-9]+$/) === null || date.length !== 8) {
        alert('Pleast enter a valid date')
      }
    else {
      const day = date.slice(0,2);
      const month = date.slice(2,4);
      const year = date.slice(4);

      date = day + '-' + month + '-' + year;
      setTList(tlist.concat(subject));
      setTDate(tdate.concat(date));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClear} className='Clear'>Clear</button>
        
        <div className='BodyDiv'>
          
          <form id="todoForm" className='Add-List' onSubmit={handleSubmit}>
            <p>To-Do List</p>
            <input 
              className='Input'
              placeholder='Subject'
              maxlength="30"
              onChange={(e) => setSubject(e.target.value)}
            >
            </input>
            <input
              className='Input'
              placeholder='Due Date (DDMMYYYY)'
              maxlength="8"
              onChange={(e) => setDate(e.target.value)}
            >
            </input>
            <button className='Button' onClick={handleClearForm} type='submit'>&gt;</button>
          </form>

          <div className='ResultDiv'>
            <div className='Result'>
              <div className='ResultHeader'>{tlist.length > 0 ? "Subject": ''}</div>
              <div className='ResultHeader'>{tlist.length > 0 ? "Date": ''}</div>
            </div>
            <div className='ResultList'>
              <div className='ResultBox'>
                {tlist.map((tlist) => 
                  <p>{tlist}</p>)
                }
              </div>
              <div className='ResultBox'>
                {tdate.map((tdate) => 
                  <p>{tdate}</p>)
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
