import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = (event) => {
    setButtonColor(newButtonColor);
  };

  const handleCheck = (event) => {
    setDisabledBtn(event.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleClick}
        disabled={disabledBtn}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        onChange={handleCheck}
      />
      <label htmlFor="enable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
