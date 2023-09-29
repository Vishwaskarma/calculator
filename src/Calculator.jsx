import { useState } from "react";
import './Calculate.css'
function Chai() {
  const [data, setData] = useState("");


  function handleClick(e) {
    setData(data.concat(e.target.name))


  
  }
  function calculate(){
    setData(eval(data))
  }
function clear(){
  setData("")
}
function del(){
  setData(data.slice(0,-1))


}

  return (
   <div className="container">
    <div className="calculator-box">

         <input type="text" placeholder="0" value={data}/>

<button onClick={clear}>AC</button>
<button onClick={del}>DEL</button>


<button name="%" onClick={handleClick}>
  %
</button>
<button name="/" onClick={handleClick}>
  /
</button>
<button name="7" onClick={handleClick}>
  7
</button>
<button name="8" onClick={handleClick}>
  8
</button>
<button name="9" onClick={handleClick}>
  9
</button>
<button name="*" onClick={handleClick}>
  x
</button>
<button name="4" onClick={handleClick}>
  4
</button>
<button name="5" onClick={handleClick}>
  5
</button>
<button name="6" onClick={handleClick}>
  6
</button>
<button name="+" onClick={handleClick}>
  +
</button>
<button name="1" onClick={handleClick}>
  1
</button>

<button name="2" onClick={handleClick}>
  2
</button>
<button name="3" onClick={handleClick}>
  3
</button>
<button name="-" onClick={handleClick}>
  -
</button>
<button name="0" onClick={handleClick}>
  0
</button>
<button name="." onClick={handleClick}>
  .
</button>

<button className="equal"  onClick={calculate}>=</button>

   </div>
    </div>
 
    
  );
}
export default Chai;
