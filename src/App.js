import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState("Hello dear one, learning React...?");

  useEffect(() => {
    console.log('use effect hook called');
    const timeoutId = setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;