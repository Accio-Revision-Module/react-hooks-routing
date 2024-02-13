import { useEffect, useState } from 'react'

function Hooks() {
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState(null);

  const handleUpdate = () => {
    setCounter((prev) => prev + 1);
  }
  
  // component did mount
  useEffect(() => {
    console.log("Only once")

    let interval = setInterval(() => {
        setCounter((prev) => prev + 1);
        console.log("Hello");
    }, 1000);
    setId(interval);

    return () => {
        clearInterval(interval);
    }
  }, [])

  // component did update
  useEffect(() => {
    console.log("Counter value changed: ", counter);

    if(counter === 5) {
        clearInterval(id);
        setId(null);
    }

    // component will unmount
    return () => {
      console.log("Removed from the screen")
    }
  }, [counter]);

  return (
    <>
      <h1>Hooks</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleUpdate}>Increment</button>
    </>
  )
}

export default Hooks
