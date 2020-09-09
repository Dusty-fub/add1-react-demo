import React, { useState } from 'react';

function App() {

  const [n, setn] = useState(0);

  return (
    <div className='container'>
      {n}
      <div className='btn'>
        <button onClick={() => setn(n + 1)}>+1</button>

        <button onClick={() => setn(n - 1)}>-1</button>
      </div >
    </div>
  );
}

export default App;
