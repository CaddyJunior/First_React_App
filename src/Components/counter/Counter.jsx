import { useState } from 'react'
import { PropTypes } from 'prop-types'

import './Counter.css'

export default function Counter(){

    //Here we are creating a state of value count using a method setCount
    //and we have set the initial state value to zero : useState[0]
    const [count, setCount] = useState(0);

    function increPareCountFunction(by){
        setCount(count + by)
    }

    function decrePareCountFunction(by){
        setCount(count - by)
    }

    return (
        
        <div>
            <span className="totalCount">{count}</span>
            {/* The first counter button has a default property of 1 */}
            {/* <CounterButton incrementMethod={increPareCountFunction}/> */}
            <CounterButton by={1} incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction}/>
            <CounterButton by={2} incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction}/>
            <CounterButton by={5} incrementMethod={increPareCountFunction}
                decrementMethod={decrePareCountFunction}/>
        </div>
    )
}

function CounterButton({ by, incrementMethod, decrementMethod }) {


    function incrementCounterFunction() {
        incrementMethod(by)
    }

    function minusCounterFunction() {
        decrementMethod(by)
    }

    return (
        <div className='CounterButton'>
            <div className='plusOneButtons'>
                <div>
                    <button className="counterButtons"
                        onClick={incrementCounterFunction}>+{by}</button>

                    <button className="counterButtons"
                        onClick={minusCounterFunction}>-{by}</button>
                </div>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

// CounterButton.defaultProps = {
//     by: 1
// }