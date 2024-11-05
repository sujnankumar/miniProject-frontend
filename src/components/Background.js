import React from 'react';

const ICONS = [
  '/images/pizza.svg',
  '/images/beer.svg',
  '/images/popcorn.svg',
  '/images/tray.svg',
  '/images/Hotdog.svg'
];

const Background = ({ iconCount = 100 }) => {
  const iconsArray = Array.from({ length: iconCount });

  return (
    <div className="relative h-full w-fulloverflow-hidden">
      {iconsArray.map((_, index) => {
        const iconSrc = ICONS[Math.floor(Math.random() * ICONS.length)];
        const style = generateRandomStyles();

        return (
          <img
            key={index}
            src={iconSrc}
            alt="food icon"
            style={{ ...style, position: 'absolute', opacity: 0.1 }}
          />
        );
      })}
    </div>
  );
};

function generateRandomStyles() {
  const randomPositionX = Math.random() * 100; // Percentage for left position
  const randomPositionY = Math.random() * 100; // Percentage for top position
  const randomRotation = Math.random() * 360; // Rotation in degrees
  const randomSize = Math.random() * 20 + 10; // Random size between 10 and 30

  return {
    top: `${randomPositionY}%`,
    left: `${randomPositionX}%`,
    transform: `rotate(${randomRotation}deg)`,
    width: `${randomSize}px`,
    height: `${randomSize}px`,
  };
}

export default Background;
