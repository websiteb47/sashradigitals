import React, { useState } from 'react';

const Butterfly = () => {
  const [showImg, setShowImg] = useState(true);

  const handleImageError = () => {
    console.log('Butterfly image failed to load, using CSS fallback');
    setShowImg(false);
  };

  const handleImageLoad = () => {
    console.log('Butterfly image loaded successfully');
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 hidden md:block">
      {showImg ? (
        <img
          src="/images/butterfly.png"
          alt="Flying butterfly"
          className="butterfly-img"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        <div className="butterfly butterfly-1" />
      )}
    </div>
  );
};

export default Butterfly; 