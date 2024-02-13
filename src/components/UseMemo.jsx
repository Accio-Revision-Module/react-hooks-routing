import { useMemo, useState } from "react"

function UseMemo() {
    const [theme, setTheme] = useState("dark");
    const [number, setNumber] = useState("");

    const handleDouble = () => {
        for(let i=0; i < 1000000; i++) {
            console.log("hi");
        }
        return number * 2;
    }
    const double = useMemo(() => handleDouble(), [number]);

    const styles = {
        backgroundColor: theme == "dark" ? "black" : "white",
        color: theme == "dark" ? "white" : "black"
    }

    const handleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

  return (
    <div>
        <h2>UseMemo</h2>
        <div style={styles}>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos magnam natus modi voluptate quo tempore minus architecto maxime quasi?</p>
        </div>

        <button onClick={handleTheme}>Toggle Theme</button>

        <p>
            <input type="number" placeholder="Enter a number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </p>
        <p>
            Double value: {double}
        </p>
    </div>
  )
}

export default UseMemo