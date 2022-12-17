import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import './app-styles';

export default function App() {
  return (
    <>
      <Navbar />
      <h1>Hello, React app.</h1>
      <Background />
    </>
  );
}
