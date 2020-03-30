import React, {useContext, useState} from 'react';
import CountContext from "./CountContext";

const Component1 = () => {
  const context = useContext(CountContext)
  const [localCount, setLocalCount] = useState(0)

  console.log('component 1',context)

  return <>
    <button onClick={() => {
      context.dispatch(1); // call global dispatch but it wont update anything
      setLocalCount(localCount + 1) // update local state
    }}>Default Behaviour</button>
    <h1>{"component 1 without dependency"}<br/>
      <label>my local count --> {localCount}.  obj1 --> {context.data.obj1.count1} </label>
    </h1>
  </>;


};

export default Component1
