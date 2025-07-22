import { useState } from 'react'
import Smp from "./smp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Smarika</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="bg-red-500 text-white p-4 rounded">
  Tailwind is really working! 
</div>
<Smp/>
    </>
  )
}

export default App
