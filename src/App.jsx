import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
  const [isBoom, setIsBoom] = useState(false);

  const handleClick = () => {
    if (isBoom) {
      setIsBoom(false);
      setCount(count + 1);
    } else {
      const newCount = count + 1;
      if (newCount % 5 === 0) {
        setIsBoom(true);
      } else {
        setCount(newCount);
      }
    }
  };
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      {isBoom ? (
        <h1 style={{color: 'red'}}>BOOM!</h1>
      ) : (
        <h1>{count}</h1>
      )}
      <button onClick={handleClick}style={{fontSize: '20px', padding: '10px'}}>Click</button>
    </div>
  )
}

export default App