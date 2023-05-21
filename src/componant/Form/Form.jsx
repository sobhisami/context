import { useContext, useState } from "react"
import Input from "./Input"
import Lable from "./Lable"
import { Context } from "../Context/Context"
import Swal from "sweetalert2"

const Form = () => {
  let ContextApi=useContext(Context);
  let [title,setTitle]=useState("")
  let [date,setDate]=useState("")
  let [value,setValue]=useState("")
  let [description,setDescription]=useState("")
  let onSubmitHandle=(e)=>{
    e.preventDefault();
    if (Cheak()) {
      DataObject();
    }
    Clear();
  }

  let DataObject=()=>{
    const id = Math.floor(Math.random()*100) 
    let Data={id,title,date,value,description}
    ContextApi.SetDataa(prev=>[...prev,Data])
    console.log(Data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 500
    })
   }

let Clear=()=>{
  setTitle("")
  setDescription("")
  setValue("")
  setValue("")
}
let Cheak=()=>{
  if (title!=="" && description!=="" && value!=="" && date!=="") {
    return true
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'please enter date',
   
    })
    return false;
  }

}

  return (
    <form className="row" onSubmit={onSubmitHandle}>
    <div className="mb-3 col-md-6">
      <Lable>Title</Lable>
      <Input type="text" className="form-control addTitle" value={title} onChange={e=> setTitle(e.target.value)} />
    </div>

    <div className="mb-3 col-md-6">
      <Lable>Date</Lable>
      <Input type="date" className="form-control addDate" value={date} onChange={e=> setDate(e.target.value)}/>
    </div>


    <div className="mb-3 col-md-6">
      <Lable>Value</Lable>
      <Input type="number" className="form-control addValue" value={value} onChange={e=> setValue(e.target.value)}/>
    </div>
    <div className="mb-3 col-md-6">
      <Lable>Description</Lable>
      <Input type="text" className="form-control addDescrption" value={description} onChange={e=> setDescription(e.target.value)}/>
    </div>
    <div className="mb-3 col-md-12 text-right">
      <button type="submit" className="btn btn-primary addBtn">Add</button>
    </div>
  </form>
  )
}

export default Form
