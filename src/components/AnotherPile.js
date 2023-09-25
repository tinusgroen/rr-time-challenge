import './AnotherPile.css';

export const AnotherPile = (props) => {

  return (
    <div>
      <figure className="moneycontainer">
        <div className="moneycolumn">
          {Array.from({ length: props.instances }, (_, index) => (
            <img
              key={index}
              src="coin.png"
              alt="Money"
              className="money-image"
              style={{ marginLeft: `${-5}px` }}
            />
          ))}
        </div>
      </figure>
    </div>
  );
};
