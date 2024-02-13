import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [name, setName] = useLocalStorage("", "name");
  const [age, setAge] = useLocalStorage("", "age");

  return (
    <div>
        <h1>Home</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
    </div>
  )
}

export default Home