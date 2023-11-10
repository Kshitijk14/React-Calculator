import { useEffect, useState } from "react"

const Calculator = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      setCounter(100)
    }, [])

  return (
    <div className="" style={{}}>
        <button onClick={() => setCounter( (prevCount) => prevCount - 1 )}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter( (prevCount) => prevCount + 1 )}>+</button>
    </div>
  )

}

export default Calculator