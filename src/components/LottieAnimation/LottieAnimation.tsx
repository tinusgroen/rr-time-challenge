import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from "./time_is_money.json";

function LottieAnimation() {
    useEffect(() => {
        const container = document.getElementById('lottie-container') as Element; // Use type assertion

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
        <div id="lottie-container" style={{ width: '300px', height: '300px' }}></div>
    );
}

export default LottieAnimation;
