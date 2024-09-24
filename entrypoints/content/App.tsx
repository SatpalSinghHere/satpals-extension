import { useState } from "react";

export default () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div className="bg-red-500 rounded-md p-2">
      <p>This is React. {count}</p>
      <button className="bg-slate-300 rounded-sm px-2 text-black" onClick={increment}>Increment</button>
    </div>
  );
};
