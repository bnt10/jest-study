import {useState} from 'react'

function SectionTest2() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  const decrementHandleCount = () => {
    if (count < 1) {
      console.log('No count blow 0')
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div data-test="component-app">
      <button onClick={handleCount} data-test="increment-button">
        +
      </button>
      <button onClick={decrementHandleCount} data-test="decrement-button">
        -
      </button>
      <div data-test="counter-display"></div>
      The counter is currently&nbsp;
      <span data-test="count">{count}</span>
    </div>
  )
}

export default SectionTest2
