import {useState} from 'react'

function SectionTest2() {
  const [count, setCount] = useState(0)
  const handleCount = () => setCount(count + 1)
  return (
    <div data-test="component-app">
      <button onClick={handleCount} data-test="increment-button">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </button>
      <div data-test="counter-display"></div>
    </div>
  )
}

export default SectionTest2
