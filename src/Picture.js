import React from 'react';

const Picture = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>React Add Picture Example</h1>
      <img 
        src="/images/example.jpg" 
        alt="Example from Public Folder" 
        style={{ width: '300px', borderRadius: '10px' }} 
      />
    </div>
  );
};

export default Picture;
