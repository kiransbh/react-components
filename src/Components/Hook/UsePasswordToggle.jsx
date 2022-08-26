import { useState } from "react"

function UsePasswordToggle() {
  const[ show, setShow ] = useState(false);
  
  const icon = show ? 'show' : 'hide';
  const inputType = show ? 'text' : 'password'; 
  const click = () => { setShow(!show) }

  return [ inputType, icon, click ];
}

export default UsePasswordToggle