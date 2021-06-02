import React from 'react';
import './App.css';
import Headline from './components/Headline';
import InformationSection from './components/InformationSection';

function App() {
  return (
    <div className="App">
      <InformationSection backgroundImage="coffee.jpg">
        <Headline text="Moss Consulting" />
      </InformationSection>
      <InformationSection backgroundImage="nature.jpg" />
      <InformationSection backgroundImage="waterfall.jpg" />
    </div>
  );
}

export default App;
