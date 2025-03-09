import Car from "./Car";
import Apple from "./Apple";
function Garage() {
 const carprop = { brand1: "brand100", brand2: "brand200" };
 const carpropsList = [
  { brand1: "Testla", brand2: "black" },
  { brand1: "suzuki", brand2: "red" },
 ];
 return (
  <div>
   <h1>Who is my gaange</h1>
   {carprop.brand1 != undefined && carprop.brand2 != undefined ? (
    <Car carprop={carprop} />
   ) : null}

   <Apple></Apple>

   <ul>
    {carpropsList.map((carprop) => (
     <li>
      <Car key={carprop.brand1} carprop={carprop} />
     </li>
    ))}
   </ul>
  </div>
 );
}
export default Garage;
