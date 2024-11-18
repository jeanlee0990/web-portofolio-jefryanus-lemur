import React from 'react';

const Bio = () => {
  return (
    <section id="bio" style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      margin: '2rem auto',
      maxWidth: '800px',
      borderRadius: '15px',
      backgroundColor: '#F3F4F6',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        marginBottom: '1rem', 
        fontSize: '2.5rem', 
        fontWeight: '600', 
        color: '#111827', 
        fontFamily: 'Poppins, sans-serif'
      }}>
        My Bio
      </h2>
      <p style={{
        lineHeight: '1.8',
        fontSize: '1rem',
        color: '#4B5563',
        maxWidth: '700px',
        margin: '0 auto',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Saya adalah seorang CTO yang berpengalaman dengan spesialisasi dalam pengembangan aplikasi modern, 
        menggunakan teknologi terkini untuk menyelesaikan berbagai masalah bisnis.
      </p>
    </section>
  );
};

export default Bio;
