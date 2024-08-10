import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();
const API_URL = 'http://localhost:3000/'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [authErr, setAuthErr] = useState('');
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(`${API_URL}auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data.user.email);
        } catch (error) {
          toast("session expired!,please login");
          console.error('Error checking user:', error);
          setAuthErr('');
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);
  const updateUser = async (location, volunteer, navigate) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast("Session expired! Please log in again.");
        return;
      }

      console.log(location, volunteer, user);

      const response = await axios.put(
        `${API_URL}auth/me/updateUser`,
        {
          location,
          role: volunteer,
          email: user,
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      toast("User information updated successfully!");
      navigate('me');
    } catch (error) {
      console.error('Error updating user:', error.response?.data?.message || error.message);
      toast.error('Failed to update user information');
    }
  };

  const signin = async (email, password, navigate) => {
    try {
      console.log(email, password);
      const response = await axios.post(`${API_URL}auth/signin`, { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user.email);
      toast("Welcome back!");
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.response.data.message);
      setAuthErr(error.response.data.message);
    }
  };

  const signup = async (email, password, navigate) => {
    try {
      const response = await axios.post(`${API_URL}auth/signup`, { email, password });
      //   console.log(response);
      //   console.log(response.data.user);
      //   console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user.email);
      toast("Welcome!");
      navigate('/');
    } catch (error) {
      //   console.error('Error signing up:', error);
      console.error('Error signing in:', error.response.data.message);
      setAuthErr(error.response.data.message);
    }
  };

  const signout = (navigate) => {
    localStorage.removeItem('token');
    toast("bye!");
    setUser('');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout, authErr, setAuthErr, loading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
