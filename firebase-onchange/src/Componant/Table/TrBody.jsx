import {faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import Form from "../Form/Form";
import Edit from "./Edit";
import axios from "axios";

const TrBody = ({Data,DeleteValue,OnEdit,DataSource,SetDataSource}) => {
  let DeletaHandler=()=>{
     axios.delete(`https://expenses-app-32e19-default-rtdb.firebaseio.com/expensses/${Data.id}.json`)
    .then((response)=>{
     DeleteValue(Data.id);
    })
    .catch((err)=>{
       console.log(err);
    });
  }

  return (
    <tr>
    <td> {Data.Title} </td>
    <td> {Data.Date} </td>
    <td>{Data.Value}  </td>
    <td colSpan="2">{Data.Description}  </td>
    <td onClick={DeletaHandler} className="text-right"> <FontAwesomeIcon  icon={faTrashAlt}/> </td>
    <td  className="text-right">
    {<Edit Data={Data} DataSource={DataSource} SetDataSource={SetDataSource}/>}
    </td>
  </tr>
  )
}
export default memo(TrBody) 
