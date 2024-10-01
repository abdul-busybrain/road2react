import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState("");
  // 1
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      Count: {count}
      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
      <MyInput inputValue={text} onInputChange={handleTextChange} />
      {text}
    </div>
  );
}

// 2
function MyInput({ inputValue, onInputChange }) {
  return <input type="text" value={inputValue} onChange={onInputChange} />;
}
