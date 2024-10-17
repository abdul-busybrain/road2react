import { useEffect, useState } from "react";

const style = {
  padding: "10px 30px",
  border: "1px solid black",
  display: "block",
};

export default function Ap() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleDivClick(event) {
    alert(
      `<div/> \n event.target: ${event.target} \n event.currentTarget: ${event.currentTarget}`
    );
  }

  function handleSpanClick(event) {
    alert(
      `<span/> \n event.taget: ${event.target} \n event.currentTarget: ${event.currentTarget}`
    );
  }

  return (
    <div style={style} onClick={handleDivClick}>
      <span style={style} onClick={handleSpanClick}>
        Click me
      </span>
    </div>
  );
}
