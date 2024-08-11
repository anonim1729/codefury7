import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Homelayout from './layouts/Homelayout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import NotFound from './pages/NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import UserForm from './components/UserForm';
import Notifications from './components/Notifications';
import AlertPages from './pages/AlertPages';
import Weather from './components/Weather';
import NaturalDisasters from './pages/NaturalDisasters';
import DisasterPrep from './components/DisasterPrep';

import Create from './pages/DisasterPages/CreateDisaster'
import Show from './pages/DisasterPages/Show'
import ShowDisaster from './pages/DisasterPages/ShowDisaster';
import UpdateDisaster from './pages/DisasterPages/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homelayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'me',
          element: <Dashboard />
        },
        {
          path: 'chat',
          element: <Chatbot />
        },
        {
          path: 'form',
          element: <UserForm />
        },
        {
          path: 'notifications',
          element: <Notifications />
        },
        {
          path: 'alerts',
          element: <AlertPages />
        },
        {
          path: 'weather',
          element: <Weather />
        },
        {
          path: 'edu',
          element: <NaturalDisasters />
        },
        {
          path: 'disaster',
          // element: <div>Hello</div>, // Placeholder, replace with an actual layout if needed
          children: [
            {
              path: '',
              element: <Show /> 
            },
            {
              path: 'new',
              element: <Create /> // This will render the Create component at /disaster/new
            },
            {
              path:':id',
              element: <ShowDisaster />
            },
            {
              path: 'update/:id',
              element: <UpdateDisaster />,
            }
          ]
        },
        {
          path: 'disasters',
          children: [
            {
              path: ':id',
              element: <DisasterPrep />
            }
          ]
        }
        
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/*',
      element: <NotFound/>
    }
  ]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
