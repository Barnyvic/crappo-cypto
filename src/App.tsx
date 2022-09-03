import React from 'react';
import Herosection from './components/Herosection';
import HowmuchEarn from './components/HowmuchEarn';
import TradeCrappo from './components/TradeCrappo';
import Whycrappo from './components/Whycrappo';
function App() {
  return (
    <div className="App">
      <Herosection/>
      <Whycrappo/>
      <HowmuchEarn/>
      <TradeCrappo/>
    </div>
  );
}

export default App;
