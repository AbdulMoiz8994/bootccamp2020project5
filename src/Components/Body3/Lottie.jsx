import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
export const Lottie = () => {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assests/connect.json')
        })
    }, [])
    return (
        <div className="border">
            <div ref={container} className="svgImage">

            </div>
        </div>
    )
}
