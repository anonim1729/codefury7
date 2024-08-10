import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Homelayout from './layouts/Homelayout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import UserForm from './components/UserForm';
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
    }
  ])
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
  )
}

export default App
