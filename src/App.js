import React, {useReducer} from 'react';
import Component1 from "./component1";
import Component2 from "./component2";
import CountContext from "./CountContext"


function init(initialCount) {
  return {
    partner: {
      data: {
        version: initialCount,
        obj1: {
          count1: initialCount
        },
        obj2: {
          count2: initialCount
        }
      }
    }
  };
}

function reducer(state, action) {
  switch (action) {
    case 1:
      return {
        partner: {
          data: {
            version: state.partner.data.version + 1,
            obj1: {
              count1: state.partner.data.obj1.count1 + 1
            },
            obj2: {
              count2: state.partner.data.obj2.count2
            }
          }
        }
      };
    case 2:
      return {
        partner: {
          version: state.partner.data.version + 1,
          data: {
            obj1: {
              count1: state.partner.data.obj1.count1
            },
            obj2: {
              count2: state.partner.data.obj2.count2 + 1
            }
          }
        }
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <CountContext.Provider value={{data: state.partner.data, dispatch: dispatch}}>
      <>
        <Component1/>
        <Component2/>
      </>
    </CountContext.Provider>
  )
}

export default App;
