import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './main/MainPage'
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <MainPage/>
  </ChakraProvider>
);
