import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <MyInput myValue={text} onChange={handleTextChange} />
      {text}
    </div>
  );
}

function MyInput({ myValue, onChange }) {
  return (
    <div>
      <input value={myValue} onChange={onChange} />
    </div>
  );
}
