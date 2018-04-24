import React from 'react';
import Header from './Header';
import ItemList from './ItemList';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {/* <ItemList /> */}
      {props.children}
    </div>
  );
};

export default App;
