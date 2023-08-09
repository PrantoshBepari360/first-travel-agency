import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-6 right-6 px-3 py-2 shadow-lg rounded bg-blue-500 text-white ${
        showButton ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      &#9650;
    </button>
  );
};

export default ScrollToTopButton;
