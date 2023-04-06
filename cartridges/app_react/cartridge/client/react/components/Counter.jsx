import React, { useState } from 'react';

export default function Counter({msg = 'Hello react SSR', start = 42}) {
    const [count, setCount] = useState(start);

    function add() {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <h1>{msg}! {count}</h1>

            <button onClick={add}>Add 1!</button>
        </div>
    )
}
