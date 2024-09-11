import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Button from './Materi/Components/Button';
import Styling from './Materi/Styling/Styling';
import MateriForm from './Materi/Form/MateriForm';
import NotFound from './Materi/NotFound';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    { path: '/', element: <MateriForm />, errorElement: <NotFound /> },
    {
      path: '/components',
      element: (
        <Button
          onClickButton={() => setCount((count) => count + 1)}
          value={count}
        />
      ),
    },
    {
      path: '/styling',
      element: <Styling />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
