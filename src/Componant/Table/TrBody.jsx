import {faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import Form from "../Form/Form";
import Edit from "./Edit";

const TrBody = ({Data,DeleteValue,OnEdit,DataSource,SetDataSource}) => {
  // let DeletaHandler=()=>{
  //    DeleteValue(Data.id);
  // }

  return (
    <tr>
    <td> {Data.Title} </td>
    <td> {Data.Date} </td>
    <td>{Data.Value}  </td>
    <td colSpan="2">{Data.Description}  </td>
    <td onClick={()=>DeleteValue(Data.id)} className="text-right"> <FontAwesomeIcon  icon={faTrashAlt}/> </td>
    <td  className="text-right">
    {<Edit Data={Data} DataSource={DataSource} SetDataSource={SetDataSource}/>}
    </td>
  </tr>
  )
}
export default memo(TrBody) 
