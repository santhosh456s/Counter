import React from "react";
import "./styles.css";

export default function App(praps) {
  const {id, value, onDelete,onincrement} =praps;
  

  return (
    <div className="App">
      
    <span className={{value}==0 ?"red":"green"}>{value==0 ?"Zero":value}</span>
      <button onClick={()=>onincrement(id)}>Increment</button>
      <button onClick={() =>onDelete(id)}>Delete</button>
    
    </div>
  );
}
