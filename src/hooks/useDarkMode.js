import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useDarkMode = () => {
  return useContext(ThemeContext);
};

export default useDarkMode;