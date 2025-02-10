import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const useLocalStorage = (key) => {
    const location = useLocation()
    const formData = location.state

    useEffect(() => {
      if (formData) {
          localStorage.setItem(key, JSON.stringify(formData));
      }
  }, [formData, key]);

  const getStoredData = () => {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
  };

  return { getStoredData };
};


export default useLocalStorage