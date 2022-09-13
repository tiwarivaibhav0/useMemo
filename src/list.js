import { memo, useContext, useMemo } from "react";
import { Contxt } from "./App";

const List = () => {
  var cont = useContext(Contxt);

  var list0 =useMemo(()=>cont.listVal[0]);
  console.log(list0)
  console.log("list render");
  return <div>{list0}</div>;
};

export default memo(List);
