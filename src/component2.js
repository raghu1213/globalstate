import React, {useContext, useMemo, useState} from "react";
import CountContext from "./CountContext";

const Component2 = () => {
  const [localCount, setLocalCount] = useState(0)

  //global state
  let context = useContext(CountContext);
  //local state
  return useMemo(() => {
    console.log('component 2 ', context)
    return <>
      <button onClick={() => {
        context.dispatch(2); // call global dispatch but it wont update anything
        setLocalCount(localCount + 1) // update local state
      }}>Button with Memo
      </button>

      <h1>{'Component 2 with memo'}<br/>
        <label>local count --> {localCount}. obj2--> {context.data.obj2.count2}</label>
      </h1>
    </>
  }, [context.data.obj2.count2])
}


export default Component2
