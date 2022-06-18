import { useState, useEffect } from 'react';

const useCountdown = () => {
  const [count, setCount] = useState(0);

  return { count };
};

export default useCountdown;
