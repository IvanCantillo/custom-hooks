import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState);

    const increment = ( factor = 1 ) => setCounter( counter + factor );
    const reset = () => setCounter( initialState );
    const decrement = ( factor = 1 ) => counter > 0 ? setCounter( counter - factor ) : 0;

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
