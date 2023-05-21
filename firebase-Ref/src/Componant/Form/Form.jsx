import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import InputFRaf from "./InputFRaf";
import axios from "axios";

const Form = ({AddValuee}) => {

   let TitleRef=useRef();
   let DataRef=useRef();
   let ValueRef=useRef();
   let DescriptionRef=useRef();
  const FromHandler=(e)=>{
    e.preventDefault();
      if (Cheak()) {
     DataObject();
      }
   }
let DataObject=()=>{
  let Object={
    id:Math.random(),
    Title:TitleRef.current.value,
    Date:DataRef.current.value,
    Value:ValueRef.current.value,
    Description:DescriptionRef.current.value
  }
  axios.post("https://expenses-app-32e19-default-rtdb.firebaseio.com/expenses.json",Object)
  .then(function (response) {
  Object.id=response.data.name;
  console.log(response);
  console.log("success added");
  })
  .catch(function (error) {
    console.log(error.message);
  });
  
  AddValuee(Object);
  Clear();
}
   let Clear=()=>{
    TitleRef.current.value="";
    DataRef.current.value="";
    ValueRef.current.value="";
    DescriptionRef.current.value="";
   }
let Cheak=()=>{
  if (TitleRef.current.value!=="" && DataRef.current.value!==""&&ValueRef.current.value!==""&& DescriptionRef.current.value!=="") {
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}
// foucs the title with use ref
   useEffect(()=>{
    TitleRef.current.focus();
   },[])
   
  return (
    <form className="row" onSubmit={FromHandler}>
    <div className="mb-3 col-md-6">
      <label className="form-label">Title</label>
      <InputFRaf type="text" className="form-control addTitle" aria-describedby="" ref={TitleRef} />
    </div>
    <div className="mb-3 col-md-6">
      <label className="form-label">Date</label>
      <input type="date" className="form-control addDate" aria-describedby="" ref={DataRef}/>
    </div>
    <div className="mb-3 col-md-6">
      <label className="form-label">Value</label>
      <input type="number" className="form-control addValue" aria-describedby="" ref={ValueRef}/>
    </div>
    <div className="mb-3 col-md-6">
      <label htmlFor="title" className="form-label">Description</label>
      <input type="text" className="form-control addDescrption" aria-describedby="" ref={DescriptionRef}/>
    </div>
    <div className="mb-3 col-md-12 text-right">
      <button type="submit" className="btn btn-primary addBtn">Add</button>
    </div>
  </form>
  )
}
export default Form;
