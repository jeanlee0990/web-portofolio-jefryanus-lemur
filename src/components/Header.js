import React from 'react';

const Header = () => {
  return (
    <header style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #3B82F6, #9333EA)',
      color: '#FFFFFF',
      borderRadius: '0 0 50px 50px',
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.3)'
    }}>
      <h2 style={{
        fontSize: '1.5rem', 
        fontWeight: '300', 
        marginBottom: '1rem',
        fontFamily: 'Poppins, sans-serif'
      }}>
        CTO & Co-Founder Eduwork
      </h2>
      <h1 style={{
        fontSize: '3rem', 
        fontWeight: '700', 
        margin: '0.5rem 0',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Jefryanus Lemur
      </h1>
      <a href="#"
        style={{
          padding: '0.8rem 2rem',
          backgroundColor: '#F59E0B',
          color: '#111827',
          borderRadius: '25px',
          fontWeight: '600',
          fontFamily: 'Poppins, sans-serif',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#FFD700';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#F59E0B';
          e.target.style.transform = 'scale(1)';
        }}>
        LinkedIn Profile
      </a>
    </header>
  );
};

export default Header;
