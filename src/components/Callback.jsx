import { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

function Callback() {
    const [theme, setTheme] = useState("dark");
    const [number, setNumber] = useState("");

    const styles = {
        backgroundColor: theme == "dark" ? "black" : "white",
        color: theme == "dark" ? "white" : "black"
    }

    const handleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    const getItems = useCallback(() => {
        const num = +number;
        return [num + 1, num + 2, num + 3, num + 4];
    }, [number])

  return (
    <div>
        <h2>Callback</h2>
        <div style={styles}>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos magnam natus modi voluptate quo tempore minus architecto maxime quasi?</p>
        </div>

        <button onClick={handleTheme}>Toggle Theme</button>

        <p>
            <input type="number" placeholder="Enter a number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </p>

        <CallbackChild getItems={getItems} />
    </div>
  )
}

export default Callback