import React, { useState } from 'react'

/**
 * UseState returns a pair: the current state value and a function that lets you update it
 * @returns a React element.
 */
function useStateExemple() {
    // Déclarons une nouvelle variable d'état, que nous appellerons "count"
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Clique ici</button>
        </div>
    )
}

export default useStateExemple
