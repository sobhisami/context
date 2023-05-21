import { memo } from "react";
import TrBody from "./TrBody"
function Table({DataSource,DeleteValue,SetDataSource}) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th> Title</th>
        <th> Date</th>
        <th>value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {DataSource.map(e=>(<TrBody key={e.id} Data={e} DeleteValue={DeleteValue} SetDataSource={SetDataSource} DataSource={DataSource} />))}
    </tbody>
  </table>
  )
}
export default memo(Table) 
