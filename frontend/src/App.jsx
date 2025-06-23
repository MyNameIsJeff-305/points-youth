import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginFormPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
