import React from 'react';
import Header from './Header';
import {Footer} from './Footer';
import ItemList from './ItemList';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
