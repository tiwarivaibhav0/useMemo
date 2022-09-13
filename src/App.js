import logo from "./logo.svg";
import "./App.css";
import { createContext, useMemo, useState } from "react";
import List from "./list.js";
export const Contxt = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  // var obj={ listVal: [list, setList], countVal: [count, setCount] };
  var memooized=useMemo(()=>{return{ listVal: [list, setList], countVal: [count, setCount] }},[list])
  console.log(memooized)
  return (
    <div className="App">
      <Contxt.Provider
        value={memooized}
      >
        <List />
      </Contxt.Provider>
      <button onClick={()=>setList([...list,1])}>{list} times clicked</button>

      <button onClick={()=>setCount(count+1)}>{count} times clicked</button>
    </div>
  );
}

export default App;
