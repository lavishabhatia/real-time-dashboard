import { useEffect, useState } from "react";

const useSimulatedData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        time: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 100),
      };
      setData((prevData) => [...prevData, newData]); // Ensure immutability of arrays
    }, 1000);

    return () => clearInterval(interval);
  }, [data]); 

  return data;
};

export default useSimulatedData;
