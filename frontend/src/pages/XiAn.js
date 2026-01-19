import React from 'react';

function XiAn() {
  console.log('=== XIAN COMPONENT RENDERING ===');
  
  return (
    <div style={{ 
      padding: '60px 20px', 
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
          fontSize: '48px',
          textAlign: 'center',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          🏛️ Xi'an - Ancient Capital
        </h1>
        
        <h2 style={{ 
          color: '#FFD700', 
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          April 13-15, 2025
        </h2>
        
        <div style={{
          backgroundColor: '#FFE4E1',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#DC143C', marginBottom: '20px' }}>
            🎯 Day 1 - April 13: Arrival & Ancient Wonders
          </h3>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#8B4513' }}>00:30</strong> - Arrive Xi'an Xianyang International Airport
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#8B4513' }}>14:00</strong> - Visit Terracotta Warriors Museum (UNESCO World Heritage)
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#8B4513' }}>18:00</strong> - Dinner at Muslim Quarter (ancient food market)
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center'
        }}>
          <span style={{ backgroundColor: '#DC143C', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>
            Terracotta Warriors
          </span>
          <span style={{ backgroundColor: '#DC143C', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>
            Ancient City Wall
          </span>
          <span style={{ backgroundColor: '#DC143C', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px' }}>
            Muslim Quarter
          </span>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <button style={{ 
              backgroundColor: '#FFD700',
              color: '#8B4513',
              padding: '12px 24px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ← Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default XiAn;