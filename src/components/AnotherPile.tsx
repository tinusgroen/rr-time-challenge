import './AnotherPile.css';

export const AnotherPile = (props: { instances: number }) => {

  return (
    <div>
        <figure className="money-container">
            <div className="money-column">
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
