import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/ourNames").then(
        res => res.json()
      .then(
        data => {
          setData(data)
          console.log(data)
        }
      )
  )}, []);

  return (
    <div>
      {(typeof data.ourNames === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.ourNames.map((name, i) => (
          <p key={i}>{name}</p>
        ))
      )}
    </div>
  )
}

export default App

