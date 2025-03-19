import { useState } from "react";

function List() {
 const [list, setList] = useState(["test 1", "test 2", "test 3"]);
 const [count, ssetCount] = useState(1);
 function addList() {
  const item = "ITEM" + count;
  setList((previousState) => {
   return [...previousState, item];
  });
  ssetCount((previousState) => previousState + 1);
 }
 return (
  <div>
   <h1>Lisiz móf ainia</h1>
   <button onClick={addList}>add item</button>
   <ul>
    {list.map((el) => (
     <li>{el}</li>
    ))}
   </ul>
  </div>
 );
}
export default List;
