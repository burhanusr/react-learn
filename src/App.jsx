import { useState } from 'react';
import Button from './Button';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [number, setNumber] = useState('0');

  function handleClick(event) {
    if (number === '0') {
      setNumber(() => event.target.value);
    } else {
      setNumber((number) => number + event.target.value);
    }
  }

  return (
    <>
      <div>
        <p>{number}</p>
      </div>

      <div className="card">
        <Button value={'1'} onClickButton={handleClick} />
        <Button value={'2'} onClickButton={handleClick} />
        <Button value={'3'} onClickButton={handleClick} />
        <Button value={'4'} onClickButton={handleClick} />
        <Button value={'5'} onClickButton={handleClick} />
        <Button value={'6'} onClickButton={handleClick} />
        <Button value={'7'} onClickButton={handleClick} />
        <Button value={'8'} onClickButton={handleClick} />
        <Button value={'9'} onClickButton={handleClick} />
        <Button value={'0'} onClickButton={handleClick} />
        <Button value={'+'} onClickButton={handleClick} />
        <Button value={'-'} onClickButton={handleClick} />
        <Button value={'/'} onClickButton={handleClick} />
        <Button value={'*'} onClickButton={handleClick} />
        <Button
          value={'='}
          onClickButton={() => setNumber((number) => eval(number))}
        />
      </div>
    </>
  );
}

export default App;
