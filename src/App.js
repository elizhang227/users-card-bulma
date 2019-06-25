import React from 'react';

import CardList from './cardList';

import './App.css';

const dummyUser = {
  username: {
    first: 'Eli',
    last: 'Zhang'
  }
};

function App() {
  return (
    <div className="App">
      <CardList userData={dummyUser} />
    </div>
  );
}

export default App;
