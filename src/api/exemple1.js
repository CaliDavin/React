// import React, { useState, useEffect } from 'react'

// const useFetch = (url) => {
//     const [state, setState] = useState({
//         items: [],
//         loading: true,
//     })

//     useEffect(() => {
//         ;(async () => {
//             const res = await fetch(url)
//             const data = await res.json()
//             if (res.ok) {
//                 setState({
//                     items: data,
//                     loading: false,
//                 })
//             } else {
//                 console.log(JSON.stringify(data))
//                 setState({
//                     items: [],
//                     loading: false,
//                 })
//             }
//         })()
//     }, [])

//     return [state.loading, state.items]
// }

// const TodosList = () => {
//     const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/todos')
//     if (loading) {
//         return <p>Chargement ...</p>
//     }
//     return (
//         <ul>
//             {items.map((item) => (
//                 <li key={item.id}>{item.title}</li>
//             ))}
//         </ul>
//     )
// }
// export default TodosList
