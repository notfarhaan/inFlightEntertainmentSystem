import React from 'react';
import myImage from './jaipur_map.png';

const Maps = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px', 
      }}
    >
      <img
        src={myImage}
        alt="Jaipur Map"
        style={{
          maxWidth: '98%', 
          maxHeight: '80%', 
          width: 'auto', 
          height: 'auto', 
          borderRadius: '10px', 
          objectFit: 'contain', 
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
        }}
      />
      <h3 style={{ marginTop: '20px', color: '#ffffff', fontSize: '24px' }}>Jaipur Map</h3> {/* Updated heading */}
    </div>
  );
};

export default Maps;