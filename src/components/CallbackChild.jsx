import { useEffect, useState } from "react"

function CallbackChild({getItems}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log("Rendering callback child")
    }, [getItems])


  return (
    <div>
        <h3>Callback Child</h3>
        {items.map((e, i) => (
            <p key={i}>{e}</p>
        ))}
    </div>
  )
}

export default CallbackChild