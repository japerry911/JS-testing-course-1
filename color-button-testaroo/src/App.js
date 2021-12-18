import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = (event) => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
