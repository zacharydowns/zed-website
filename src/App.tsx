import React from 'react';
import './App.scss';
import Cards from './cards/Cards';
import Logo from './logo/Logo';

function App() {
  return (
    <div>
      <section>
        <Logo />
      </section>
      <section id="cards">
        <Cards />
      </section>
    </div>
  );
}

export default App;
