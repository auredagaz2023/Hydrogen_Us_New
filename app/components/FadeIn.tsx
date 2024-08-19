import React, {useState, useEffect} from 'react';
// import './cust.css'; // Import the CSS file for styling

const FadeIn = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [children]); // Trigger fade-in effect whenever children change

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`} key={children}>
      {children}
    </div>
  );
};

export default FadeIn;
