// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         axios
//             .get(url)
//             .then((res) => {
//                 resolve(res.data)
//             })
//             .catch((err) => reject(err))
//     })
// }

// function StateEffect() {
//     const [data, setData] = useState([])
//     const [load, setLoad] = useState(false)
//     const [error, setError] = useState('')

//     useEffect(() => {
//         getData('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => {
//                 setData(res)
//                 setLoad(true)
//             })
//             .catch((err) => {
//                 setError(err)
//                 setLoad(true)
//             })
//     }, [])

//     if (load) {
//         return (
//             <ul>
//                 {error ? (
//                     <li>Message d'erreur : {error.message}</li>
//                 ) : (
//                     data.map((GetData, index) => (
//                         <li key={index}>
//                             <b>Title : </b> {GetData.title}{' '}
//                         </li>
//                     ))
//                 )}
//             </ul>
//         )
//     } else {
//         return (
//             <div>
//                 <p>Chargement ...</p>
//             </div>
//         )
//     }
// }

// export default StateEffect
