import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Simple-Route/Routee/Routes';

function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
