import { useState } from "react";

// Hook reutilizable para sincronizar un estado con localStorage.
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Permite pasar una función igual que useState (prev => nuevoValor).
      const valorFinal = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valorFinal));
      setStoredValue(valorFinal);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
