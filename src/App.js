import React from "react";
import "./styles.css";
import Counter from "./counter"

export default function App() {

const [counters,setcounter]=React.useState([
  {id:1,value:0},
  {id:2,value:3},
  {id:3,value:0}
])

//delete the counters
const handleDelete = (id) =>{
  const filtercounter = counters.filter((counter) => counter.id !==id)
  setcounter(filtercounter);
};

// increment the value
const hendelclick = (id) =>{
  const counterCopy = counters.map((counter) =>{
    const counterCopy = { ...counter };
    if(counterCopy.id === id){
      counterCopy.value++;
    }
    return counterCopy;
  });
  setcounter(counterCopy);
};

// reset the value
const handelReset = () =>{
const resrtCounerValue = counters.map((counter)=>{
  counter.value=0;
  return counter;
});
setcounter(resrtCounerValue);
}

  return (
    <>
    <button onClick={handelReset}>Reset</button>
    {counters.length !==0 ? <div><h3>there are {counters.length} item is there </h3></div> :null}
    {counters.length !== 0 ? 
    counters.map((counter)=>(
    <Counter  
    id={counter.id} 
    key={counter.id} 
    value={counter.value} 
    onDelete={handleDelete}
    onincrement={hendelclick}/>
    )) 
    : "there are 0 item"}
    </>
  );
}
