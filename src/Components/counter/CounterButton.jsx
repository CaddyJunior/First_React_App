import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({ by, incrementMethod, decrementMethod }) {

    function incrementCounterFunction() {
        incrementMethod(by)
    }

    function minusCounterFunction() {
        decrementMethod(by)
    }

    return (
        <div className='Counter'>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}>+{by}</button>

                <button className="counterButton"
                    onClick={minusCounterFunction}>-{by}</button>
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