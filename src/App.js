import React from 'react';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import ShowHide from './components/ShowHide';
import TwoWayBinding from './components/TwoWayBinding';
import DynamicList from './components/DynamicList';
import SumNumbers from './components/SumNumbers';
import Records from './components/Records';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Learning Tasks</h1>
      <Counter />
      <SearchFilter />
      <ShowHide />
      <TwoWayBinding />
      <DynamicList />
      <SumNumbers />
      <Records />
    </div>
  );
}

export default App;
