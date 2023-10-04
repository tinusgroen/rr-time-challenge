import React, { useEffect, useState } from 'react';
import './AnotherPile.css';

export const AnotherPile = (props: { instances: number; name: string }) => {
    const [coins, setCoins] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const maxCoinsToShow = props.instances;

        // Create an array of coin elements to be displayed
        const coinElements: JSX.Element[] = [];

        for (let i = 0; i < maxCoinsToShow; i++) {
            coinElements.push(
                <div className="coin" key={i}>
                    {/* Content for each coin */}
                </div>
            );
        }

        // Update the coins state with the new elements
        setCoins(coinElements);
    }, [props.instances]);

    return (
        <div className="wrapper">
            <p className="name">{props.name}</p>
            <div className="pile">
                {coins}
            </div>
        </div>
    );
};
