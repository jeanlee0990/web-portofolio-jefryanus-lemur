import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#1F2937', 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <h1 style={{
        color: '#E5E7EB', 
        margin: 0, 
        fontSize: '1.8rem', 
        fontWeight: '700', 
        fontFamily: 'Poppins, sans-serif'
      }}>
        Jefryanus Lemur
      </h1>
      <ul style={{
        display: 'flex', 
        listStyle: 'none', 
        margin: 0, 
        padding: 0
      }}>
        <li style={{ margin: '0 1rem' }}>
          <a href="#bio" style={{
            color: '#E5E7EB',
            fontWeight: '500',
            fontSize: '1rem',
            paddingBottom: '4px',
            borderBottom: '2px solid transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.borderBottom = '2px solid #F59E0B'}
          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
            Biografi
          </a>
        </li>
        <li>
          <a href="#contact" style={{
            color: '#E5E7EB',
            fontWeight: '500',
            fontSize: '1rem',
            paddingBottom: '4px',
            borderBottom: '2px solid transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.borderBottom = '2px solid #F59E0B'}
          onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
