import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext'
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <AuthContextProvider>
         <ChakraProvider>
           <App />
         </ChakraProvider> 
       </AuthContextProvider>  
    </Router>
  </React.StrictMode>
);



