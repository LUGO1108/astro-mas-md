import { useState } from "react";

function Button() {
  const [susucribirce, setsuscribirce ]  = useState(false);
  return (
    <button onClick={() => setsuscribirce(!susucribirce)}>
      {susucribirce? "ya estas suscrito" : "suscribete"}
    </button>
  );
}
export default Button;
