import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';
import './AnotherPile.css';

export const AnotherPile = (props: { instances: number, name: string }) => {
    const [visibleCoins, setVisibleCoins] = useState(0);

    const calcCoinsToShow = () => {
        const maxCoinsToShow = props.instances;

        // Calculate the number of coins to show based on elapsed time
        const coinsToShow = Math.min(maxCoinsToShow, visibleCoins + 1);

        setVisibleCoins(coinsToShow);
    };

    useEffect(() => {
        calcCoinsToShow();
        const interval = setInterval(() => {
            calcCoinsToShow();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [props.instances]);

    const coinTrail = useTrail(visibleCoins, {
        from: { opacity: 0, transform: 'scale(0.2) rotateY(0deg)' }, // Add rotateY(0deg) for initial rotation
        to: { opacity: 1, transform: 'scale(1) rotateY(360deg)' }, // Add rotateY(360deg) for full rotation
        config: { tension: 200, friction: 12 }, // Adjust these values for the desired animation
        delay: 100, // Stagger the appearance of each coin
    });

    const graphWidth = 1000; // Adjust the width of the graph to be larger than the page
    const graphHeight = 50; // Adjust the height of the graph
    const coinSpacingX = 20; // Adjust horizontal spacing between coins
    const coinSpacingY = 20; // Adjust vertical spacing between coins

    const coinComponents = coinTrail.map((props, index) => (
        <animated.div
            key={index}
            className="coin"
            style={{
                ...props,
                position: 'absolute',
                left: index * coinSpacingX,
                top: Math.sin(index * 0.1) * coinSpacingY + graphHeight / 2, // Arrange coins in a sine wave pattern
                transformOrigin: 'center', // Set the transform origin to the center
            }}
        ></animated.div>
    ));

    return (
        <div>
            <p className="name">{props.name}</p>
            <div className="graph" style={{ width: graphWidth, height: graphHeight }}>
                {coinComponents}
            </div>
        </div>
    );
};
