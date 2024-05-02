import logo from './logo.svg';
import './App.css';
import React from 'react';
import Book from './Book';
import Dropdown from './Dropdown';
import Counter from './Counter';
import TasksList from './TasksList';
import Leaderboard from './Leaderboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element = {<Leaderboard/>}
          />
        </Routes>
      </BrowserRouter>
      {/* <Dropdown/> */}
      {/* <Counter/> */}
      {/* <TasksList/> */}
     <div className='content'>
     </div>
    </div>
  );
}

export default App;
