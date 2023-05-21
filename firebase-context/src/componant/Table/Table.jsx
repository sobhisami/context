import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "../Form/Input"
import TRow from "./TRow"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { Context} from "../Context/Context"

const Table = () => {
  let ContextApi=useContext(Context);
  let [search,setSearch]=useState("")
  let DataObject=search ? ContextApi.Dataa.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))  : ContextApi.Dataa
  return (
   <>
   <div id="search">
   <Input type="text" className="search" placeholder="Search By Name" value={search} onChange={e=>setSearch(e.target.value)}/>
   <FontAwesomeIcon icon={faSearch} className="fa-search"/>
   </div>
    <table className="table ">
      <thead>
        <tr >
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
       {DataObject.map(e=> <TRow key={e.id} Data={e}/> )}
      </tbody>
    </table>
   </>
  )
}

export default Table
