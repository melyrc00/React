import React from "react"
import { useState } from 'react';


const PrimerComponente = () => {

    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    )
}

export default PrimerComponente
