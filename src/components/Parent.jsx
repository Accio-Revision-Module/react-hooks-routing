import { memo, useState } from "react"
import Child from "./Child";

const MemoizedChild = memo(Child)

function Parent() {
    const [value, setValue] = useState("");
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

  return (
    <div>
        <h2>Parent</h2>
        
        <p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a value" />
        </p>

        <p>Counter: {counter}</p>
        <button onClick={handleClick}>Increment (+1)</button>
        

        <MemoizedChild counter={counter} />
    </div>
  )
}

export default Parent