/** 
 * Custom hook to manage fade-in and fade-out effects.
*/
import { useState, useEffect } from "react";

export function useFade(initialDelay = 300) {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), initialDelay);
        return () => clearTimeout(timer);
    }, [initialDelay]);

    const triggerFadeOut = (callback: () => void, duration = 1200) => {
        setFadeOut(true);
        setTimeout(callback, duration);
    };

    return { fadeIn, fadeOut, triggerFadeOut };
}
