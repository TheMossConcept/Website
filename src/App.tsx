import React from 'react';
import './App.css';
import InformationSection from './components/InformationSection';

function App() {
  return (
    <div className="App">
      <InformationSection backgroundImage="coffee.jpg" />
      <InformationSection backgroundImage="nature.jpg" />
      <InformationSection backgroundImage="waterfall.jpg" />
    </div>
  );
}

export default App;
