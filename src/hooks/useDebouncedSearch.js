
import { useRef, useEffect } from "react";

//if in case playlist comes from an API and the data is very huge, so hitting API on every searchkey wont be a good option!!!
const useDebounce = () => {
    const timeout = useRef();
  
    const debounce = (func, wait) => (...args) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => func(...args), wait);
    }
  
    useEffect(() => {
      return () => {
        if (!timeout.current) return;
        clearTimeout(timeout.current);
      }
    }, []);
  
    return { debounce }
  }
  
  export default useDebounce;