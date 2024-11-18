import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Bio from './components/Bio';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div>
      {/* Bagian Navbar */}
      <Navbar />

      {/* Bagian Header */}
      <Header />

      {/* Bagian Bio */}
      <Bio />

      {/* Bagian Footer */}
      <Footer />
    </div>
  );
};

export default App;
