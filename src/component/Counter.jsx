import React, { useState } from "react";

export const Counter = () => {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState(0);
  
    function increment(){
      setLikes(likes+1)
    }
  
    function dicrement(){
      setLikes(likes-1)
    }
  return (
    <div>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
    </div>
  );
};
