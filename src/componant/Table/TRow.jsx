import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Context } from "../Context/Context";
import { useContext } from "react";
import Edit from "./Edit";
import Swal from "sweetalert2"


const TRow = ({Data}) => {
  let ContextApi=useContext(Context);
  let Delete=(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let fileterd=ContextApi.Dataa.filter(e=> Data.id!==e.id);
        ContextApi.SetDataa(fileterd)
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <tr>
      <td> {Data.title} </td>
      <td> {Data.date}</td>
      <td> {Data.value} </td>
      <td colSpan="2">{Data.description} </td>
      <td className="text-right" style={{cursor: "pointer"}} onClick={Delete}><FontAwesomeIcon icon={faTrashCan}/> </td>
      <td className="text-right">
      <Edit/>
      </td>
    </tr>
  )
}

export default TRow
