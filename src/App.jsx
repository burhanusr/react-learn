import { useState } from 'react';
import Button from './Materi/Components/Button';
import Plain from './Materi/Styling/Plain/Plain';
import Sass from './Materi/Styling/Sass/Sass';
import Inline from './Materi/Styling/Inline/Inline';
import Styled from './Materi/Styling/Styled/Styled';
import ReactBootstrap from './Materi/Styling/React-Bootstrap/ReactBootstrap';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        onClickButton={() => setCount((count) => count + 1)}
        value={count}
      />
      <Plain />
      <Sass />
      <Inline />
      <Styled />
      <ReactBootstrap />
    </>
  );
}

export default App;
