import { useEffect, useState } from "react";

function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
