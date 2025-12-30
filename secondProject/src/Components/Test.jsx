import React, { useState, useEffect } from 'react';
function DocumentTitleUpdater() {
 const [count, setCount] = useState(0);
 useEffect(() => {
 document.title = `You clicked ${count} times`;
 }, [count]); // Only re-run if count changes
 return (
 <div>
 <p>Count: {count}</p>
 <button onClick={() => setCount(count + 1)}>
 Increment
 </button>
 </div>
 );
}

export default DocumentTitleUpdater;
