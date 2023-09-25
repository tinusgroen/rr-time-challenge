import React, { useState } from 'react';
import "./AnotherPile.css";

function AnotherPile(instances) {
  const [numInstances, setNumInstances] = useState(instances); // Initial number of instances

  // Add a function to handle changing the number of instances
  const handleNumInstancesChange = (newNumInstances) => {
    setNumInstances(newNumInstances);
  };

  return (
    <div>
      {/* Display multiple instances of the money image vertically */}
      <figure className="moneycontainer">
      <div className="moneycolumn"
       >
        {Array.from({ length: numInstances }, (_, index) => (
          
          <img
            key={index}
            src="coin.png"
            alt="Money"
            className="money-image"
            style={{ marginTop: `${0}px` }} // Adjust the overlap here
            />
        ))}
      </div>
      </figure>
      {/* Input for changing the number of instances */}
      <input
        type="range"
        min="1"
        max="120" // You can adjust the maximum number of instances as needed
        step="1"
        value={numInstances}
        onChange={(e) => handleNumInstancesChange(e.target.value)}
      />
    </div>
  );
}

export default AnotherPile;