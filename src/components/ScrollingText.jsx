import React from 'react';

const ScrollingTextAnimation = () => {
  // An array of sample text elements to display in the animation
  const textElements = [
    'Text 1',
    'Text 2',
    'Text 3',
    'Text 4',
    'Text 5',
  ];

  return (
    <div className='scrolling-text-container bg-[#15243B] py-1'>
      {/* Map through the textElements array to display the text elements */}
      {textElements.map((text, index) => (
        <div className='scrolling-text text-[8px]' key={index}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default ScrollingTextAnimation;
