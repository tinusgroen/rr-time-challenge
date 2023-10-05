import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from "./pomonies.json";
import "./PoMonies.css"

function PoMonies() {
    useEffect(() => {
        const container = document.getElementById('pomonies-container') as Element; // Use type assertion

        // Load the Lottie animation
        const anim = lottie.loadAnimation({
            container,
            animationData, // Your animation JSON
            renderer: 'svg', // 'canvas' or 'svg'
            loop: true, // Set to true for looped animations
            autoplay: true, // Set to true to start the animation immediately
        });

        return () => {
            anim.destroy(); // Cleanup when the component unmounts
        };
    }, []);

    return (
        <div id="pomonies-container" className="overlay-full"></div>
    );
}

export default PoMonies;
