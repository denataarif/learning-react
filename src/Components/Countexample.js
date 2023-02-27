import React,{useState} from 'react'

const Countexample = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>
            {count}
        </h1>
        <h1 onClick={() => setCount(count + 1) }>
            plus
        </h1>
        <h1 onClick={() => setCount(count - 1)}>
            minus
        </h1>
    </div>
  )
}

export default Countexample