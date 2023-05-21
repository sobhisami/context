import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const TrBody = ({Data,DeleteValue}) => {
  let DeletaHandler=async (e)=>{
     e.preventDefault(); 
      try {
        let response = await axios.delete(`https://expenses-app-32e19-default-rtdb.firebaseio.com/expenses/${Data.id}.json`)
        DeleteValue(Data.id)
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <tr>
    <td> {Data.Title} </td>
    <td> {Data.Date} </td>
    <td>{Data.Value}  </td>
    <td colSpan="2">{Data.Description}  </td>
    <td  onClick={DeletaHandler} className="text-right " id="trach"> <FontAwesomeIcon icon={faTrashAlt}/> </td>
     <td ><FontAwesomeIcon icon={faEdit}/></td>
  </tr>
  )
}
export default TrBody
