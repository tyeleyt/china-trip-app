import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  console.log('=== HOME COMPONENT RENDERING ===');
  
  return (
    <div style={{ 
      padding: '60px 20px', 
      textAlign: 'center',
      backgroundColor: '#FFF8F0',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(220, 20, 60, 0.1)'
      }}>
        <h1 style={{ 
          color: '#DC143C', 
          fontSize: '56px',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          🇨🇳 China Trip 2025
        </h1>
        
        <h2 style={{ 
          color: '#FFD700', 
          fontSize: '24px',
          marginBottom: '40px',
          fontWeight: '600'
        }}>
          Group of 12 Travelers • April 13-29
        </h2>
        
        <p style={{
          color: '#8B4513',
          fontSize: '18px',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Explore ancient capitals, modern cities, and incredible cuisine across 6 amazing destinations!
        </p>
        
        <Link to="/xian">
          <button style={{ 
            backgroundColor: '#DC143C',
            color: 'white', 
            padding: '18px 40px', 
            fontSize: '20px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 5px 15px rgba(220, 20, 60, 0.3)'
          }}>
            🏛️ Explore Xi'an Details
          </button>
        </Link>
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#FFE4E1',
          borderRadius: '12px'
        }}>
          <p style={{ color: '#8B4513', margin: 0, fontSize: '16px' }}>
            🚀 Progressive Web App • Install on your phone for offline access!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;