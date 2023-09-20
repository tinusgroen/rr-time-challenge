// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

// const MoneyPile = () => {
//   const [moneyAmount, setMoneyAmount] = useState(100);

//   const moneyPileSpring = useSpring({
//     number: moneyAmount,
//     from: { number: 0 },
//   });

//   const increaseMoney = () => {
//     setMoneyAmount(moneyAmount + 10);
//   };

//   const decreaseMoney = () => {
//     if (moneyAmount >= 10) {
//       setMoneyAmount(moneyAmount - 10);
//     }
//   };

//   return (
//     <div>
//       <h1>Money Pile</h1>
//       <div className="money-pile" onClick={increaseMoney}>
//         <img src="./money.png" alt="Money" width="100" height="100" />
//       </div>
//       <button onClick={decreaseMoney}>Spend Money</button>
//       <p>Current Balance: ${moneyPileSpring.number.interpolate((val) => val.toFixed(2))}</p>
//     </div>
//   );
// };

// export default MoneyPile;

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const MoneyPile = () => {
  // State to manage the money amount
  const [moneyAmount, setMoneyAmount] = useState(100);

  // Animation spring for money pile
  const moneyPileSpring = useSpring({
    number: moneyAmount,
    from: { number: 0 },
  });

  const increaseMoney = () => {
    setMoneyAmount(moneyAmount + 10);
  };

  const decreaseMoney = () => {
    if (moneyAmount >= 10) {
      setMoneyAmount(moneyAmount - 10);
    }
  };

  return (
    <div>
      <h1>Money Pile</h1>
      <animated.div className="money-pile" onClick={increaseMoney}>
      {moneyPileSpring.number.interpolate((val) => `$${val.toFixed(2)}`)}
      </animated.div>
      <button onClick={decreaseMoney}>Spend Money</button>
    </div>
  );
};

export default MoneyPile;