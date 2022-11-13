import { useState } from "react";
import Primer from './components/Primer'
import Segundo from './components/Segundo'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div></div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <Primer />
        <Segundo />

      </div>
    </div>
  );
}

export default App;
