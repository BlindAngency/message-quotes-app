import React, { useState } from 'react';

const quotes = [
  { text: "Break those veils that’s hiding Him from you! Break those veils of pride, you women. You’re—you’re King’s daughters; act like it, live like it.\n64-0614M — The Unveiling Of God Rev. William Marrion Branham", backgroundImage: 'url("/img/pexels-achraf-alan-3383361")' },
  { text: "And we come, too, not to heal the sick, but to pray for the sick, and to do what we can to help make life a little easier for each and every one. \n 62-0704 — We Would See Jesus Rev. William Marrion Branham", backgroundImage:'url("/img/pexels-aedrian-7970404")' },
  { text: "See, that’s what Jesus said. “And no man can come except My Father calls him.” So the only thing we do is just sow the Seed, and let it go.\n62-0704 — We Would See Jesus Rev. William Marrion Branham", backgroundImage: 'url("/img/pexels-ben-collins-8360092")' },
  { text: "65 The Word was a thought. And a thought is…A word is a thought expressed. See? \n 62-0704 — We Would See Jesus Rev. William Marrion Branham", backgroundImage: 'url("/images/yesterday.jpg")' },
  { text: "God told Joshua, in Joshua 1, “Wherever the soles of your foot treads upon, that I’ve given you for a possession.” So, footprints means “possession.” 62-0704 — We Would See Jesus Rev. William Marrion Branham", backgroundImage: 'url("/img/pexels-bri-schneiter-346529")' }
];

const Welcome = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleSwipeUp = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div 
      className="welcome-page" 
      onTouchStart={(e) => {
        const touchStartY = e.touches[0].clientY;
        e.target.addEventListener('touchend', (endEvent) => {
          const touchEndY = endEvent.changedTouches[0].clientY;
          if (touchStartY - touchEndY > 50) {
            handleSwipeUp();
          }
        }, { once: true });
      }}
      style={{ backgroundImage: quotes[currentQuoteIndex].background }}
    >
      <div className="quote">
        <h1>{quotes[currentQuoteIndex].text}</h1>
      </div>
    </div>
  );
};

export default Welcome;

