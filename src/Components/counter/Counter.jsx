import './Counter.css'

import { useState } from 'react'
import CounterButton  from './CounterButton'

export default function Counter() {

    //Here we are creating a state of value count using a method setCount
    //and we have set the initial state value to zero : useState[0]
    const [count, setCount] = useState(0);

    function increPareCountFunction(by) {
        setCount(count + by)
    }

    function decrePareCountFunction(by) {
        setCount(count - by)
    }

    function resetFunction() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}
                incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction} />
            <CounterButton by={2}
                incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction} />
            <CounterButton by={5}
                incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction} />
            <button className="resetButton"
                    onClick={resetFunction}>Reset</button>
        </>
    )
}
