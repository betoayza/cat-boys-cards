import { useState } from "react";
import { GiphyClone } from "./components/container/GiphyClone";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GiphyClone />
    </div>
  );
}

export default App;
