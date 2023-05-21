import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import Edit from "./Edit";

const TrBody = ({Data,DeleteValue}) => {
  let DeletaHandler=(e)=>{
     e.preventDefault(); 
     DeleteValue(Data.id);
  }
  return (
    <tr>
    <td> {Data.Title} </td>
    <td> {Data.Date} </td>
    <td>{Data.Value}  </td>
    <td colSpan="2">{Data.Description}  </td>
    <td  onClick={DeletaHandler} className="text-right " id="trach"> <FontAwesomeIcon icon={faTrashAlt}/> </td>
     <td >{<Edit/>} </td>
  </tr>
  )
}
export default memo(TrBody) 
