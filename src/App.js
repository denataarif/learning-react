import React from 'react';
import Countexample from './Components/Countexample';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Helloworld from './Components/Helloworld';

function App() {
  return (
    <div className="App">
      {/* <Countexample/> */}
      <Header/>
      <Helloworld name="Simon"/>
      <Footer/>
    </div>
  );
}

export default App;
