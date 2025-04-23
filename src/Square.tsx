import { JSX,useState } from "react";

type SquareProps ={
  value:string|null;
  onSquareClick:()=>void;
}
const Square = ({value,onSquareClick}:SquareProps): JSX.Element => {
 


    return <button className="square"
     onClick={onSquareClick}>{value}</button>;
  };
  
  export default Square;