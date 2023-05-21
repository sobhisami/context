import TrBody from "./TrBody"
function Table({DataSource,DeleteValue}) {
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
      {DataSource.map(e=>(<TrBody key={e.id} Data={e} DeleteValue={DeleteValue} />))}
    </tbody>
  </table>
  )
}
export default Table
