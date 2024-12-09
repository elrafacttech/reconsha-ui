import { useState, useCallback } from 'react';

/**
 * useToggle - A custom hook to manage a boolean toggle state.
 *
 * @param {boolean} initialState - The initial state of the toggle (default: false).
 * @returns {[boolean, function]} - The current state and a function to toggle the state.
 */
export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle];
};
