import { useState } from 'react';

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const close = !open;

  function toggle() {}

  return { open, close, toggle };
};

export default useToggle;
