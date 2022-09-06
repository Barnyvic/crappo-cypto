import React from 'react';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import HowmuchEarn from './components/HowmuchEarn';
import Market from './components/Market';
import TradeCrappo from './components/TradeCrappo';
import Whycrappo from './components/Whycrappo';
function App() {
  return (
    <div className="App">
      <Herosection/>
      <Whycrappo/>
      <HowmuchEarn/>
      <TradeCrappo/>
      <Market/>
      <Footer/>
    </div>
  );
}

export default App;
