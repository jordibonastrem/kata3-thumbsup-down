import { useState } from "react";

function FlipIcon({ icon1, icon2 }) {
  console.log(icon1);
  console.log(icon2);
  const [icon, setIcon] = useState(true);

  return (
    <i className={icon ? icon1 : icon2} onClick={() => setIcon(!icon)}></i>
  );
}
export default FlipIcon;
