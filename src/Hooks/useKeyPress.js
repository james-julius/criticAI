import { useState, useEffect } from 'react';


export default function useKeyPress(targetKey) {
        // console.log(targetKey)
        // console.log('calling')
        const [keyPressed, setKeyPressed] = useState(false);

        function downHandler( {key} ) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }
        function upHandler({ key }) {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        }

        useEffect(() => {
            window.addEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
            // Remove event listeners on cleanup
            return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
            }
        }, [])
        
        return keyPressed;
    }