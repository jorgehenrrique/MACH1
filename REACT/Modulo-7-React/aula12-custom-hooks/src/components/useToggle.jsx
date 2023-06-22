import { useState } from 'react';

export default function useToggle() {
  const [toggle, setTogle] = useState(false);

  const alternateToggle = () => setTogle(!toggle);

  return { toggle, alternateToggle };
}