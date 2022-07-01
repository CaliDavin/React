import React, { useState, useEffect } from 'react'

export default function StateExemple() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
        document.title = `Vous avez cliqué ${count} fois`
    })

    return (
        <>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Clique ici (+1)</button>
            <button onClick={() => setCount(count + 2)}>Clique ici (+2)</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}
