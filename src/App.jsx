import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useMemo, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import {Table,Form, Input, Button} from './Componant'
import logo from './img/m1.png'
function App() {
  let [DataSource,SetDataSource]=useState([]);
  let [Search,SetSearch]=useState("");
  let AddValue=useCallback((Expense)=>{
    SetDataSource(prev=>[Expense,...prev])
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 500
    })
  });
  let DeleteValue=useCallback((id)=>{
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
        let Filterd=DataSource.filter(e=>e.id!==id)
        SetDataSource(Filterd)
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
  },[DataSource]);

  const Searchhandle=useMemo(()=>{
   return  Search?DataSource.filter(e=>e.Title.toLowerCase().includes(Search.toLowerCase()) || e.Value.toLowerCase().includes(Search.toLowerCase())):DataSource
  },[Search,DataSource])
   // const Searchhandle=useMemo(()=>{
  //   if (Search) {
  //     return DataSource.filter(e=>e.Title.toLowerCase().includes(Search.toLowerCase())) 
  //   }
  //   return DataSource;
  // },[Search,DataSource])
//  const Searchhandle=Search?DataSource.filter(e=>e.Title.toLowerCase().includes(Search.toLowerCase()) || e.Value.toLowerCase().includes(Search.toLowerCase())):DataSource
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6">
        <img src={logo} className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="row tit">
          <h4 className="">wellcom to sobhi Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <Form AddValuee={AddValue} />
      </div>
    </div>
    <div className="row mt-5 mb-5">
      <div className="custom-card ">
        
       <span className='search'>
         <Input   type="text" placeholder="Search By Name" value={Search} onChange={(e) => SetSearch(e.target.value)}/>
              < FontAwesomeIcon icon={faSearch} className="icon-search"/>
        </span>
        <Table DataSource={Searchhandle} SetDataSource={SetDataSource} DeleteValue={DeleteValue} />
      </div>
    </div>
  </div>
  )
}

export default App
