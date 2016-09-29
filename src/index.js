import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAVPPwmea3dCRpZ5zE1Y-5ss9vB1mhHvmc';

// create a new component
// this componenet should produce some html
const App = () => {
  const render = (
    <div>
      Sickerrrrrrrrrrr
      <SearchBar />
    </div>
  );

  return render;
}

// REACT please take this
// component and shove it into the dom
ReactDOM.render(<App />, document.querySelector('.app'));
