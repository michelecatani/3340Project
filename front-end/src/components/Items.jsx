/* This is our items page.  Needs to be queried from API endpoint to retrieve list of items up for auction. 
Right now it's attached to an endpoint that just returns basic items, but that obvs needs to be dynamic. */

import React from "react";
import { useState, useEffect } from 'react';

function Items() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/items").then(
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
        {(typeof data.items === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.items.map((item, i) => (
            <p key={i}>{item}</p>
          ))
        )}
      </div>
    )
}

export default Items;