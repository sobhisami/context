import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {Table,Form,Input} from './Componant'
import logo from './img/m1.png'
import axios from 'axios';

function App() {
  const [DataSource,SetDataSource]=useState([]);
  let AddValue=(Expense)=>{
    SetDataSource(prev=>[Expense,...prev])
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500
    })
  }
  let FeatchData=()=>{
    axios.get("https://expenses-app-32e19-default-rtdb.firebaseio.com/expenses.json")
    .then((response)=>{
        console.log(response.data);
        let Data=[];
        for (let key in response.data) {
          let value = response.data[key];
          value.id=key;
          Data.push(value);
        }
        SetDataSource(Data)
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  useEffect(()=>{
   FeatchData()
  },[])
  let DeleteValue=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let Filterd=DataSource.filter(e=>e.id!==id)
        SetDataSource(Filterd)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  let [Search,SetSearch] =useState("")
  const SearchHandle=Search ? DataSource.filter(e=>e.Title.toLowerCase().includes(Search.toLowerCase())) :DataSource
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
       
        <Form AddValuee={AddValue}/>
      </div>
    </div>
    <div className="row mt-5 mb-5">
      <div className="custom-card ">
      <span className='search'>
        <Input type="text" placeholder="Search By Name"  value={Search} onChange={(e) => SetSearch(e.target.value)}/>
               <FontAwesomeIcon icon={faSearch} className='icon-search'/>
               </span>
        <Table DataSource={SearchHandle} DeleteValue={DeleteValue}/>
      </div>
    </div>
  </div>
  )
}

export default App
