import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='page-background'>
    <h1>live Count</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Start Count 
        </button>
      </div>


      <p> 
        The live count is recorded here : {count} 
      </p>

      <div className="card">
        <button onClick={() => setCount((count) => count * 0)}>
          Reset Count
        </button>
      </div>


    </div>
     
    </>
  )
}

export default App
