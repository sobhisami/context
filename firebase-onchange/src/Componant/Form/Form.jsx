import axios from "axios";
import { memo, useState } from "react";
import Swal from "sweetalert2";
const Form = ({AddValuee}) => {
  const [Title,SetTitle]=useState("");
   const [Date,SetDate]=useState("");
   const [Value,SetValue]=useState("");
   const [Description,SetDescription]=useState("");
  const FromHandler=(e)=>{
    e.preventDefault();
      if (Cheak()) {
        DataObject();
      }
   }
   let DataObject=()=>{
    const  id =Math.floor(Math.random()*100)
   const Data={id,Title,Date,Value,Description};
      axios.post("https://expenses-app-32e19-default-rtdb.firebaseio.com/expensses.json",Data)
      .then(response =>{
         Data.id=response.data.name;
         console.log("success adding");
      }).catch(err =>{
        console.log(err);
      })
      AddValuee(Data);
      Clear();
   }
   let Clear=()=>{
    SetDate("");
    SetTitle("");
    SetValue("");
    SetDescription("");
   }
   let Cheak=()=>{
    if(Title!=="" && Date!==""&& Value!==""&& Description!==""){  
      return true;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please enter data!',
      })
    }
   }
   
  return (
    <form className="row" onSubmit={FromHandler}>
    <div className="mb-3 col-md-6">
      <label className="form-label">Title</label>
      <input type="text" className="form-control addTitle" aria-describedby="" value={Title} onChange={e=>SetTitle(e.target.value)}/>
    </div>

    <div className="mb-3 col-md-6">
      <label className="form-label">Date</label>
      <input type="date" className="form-control addDate" aria-describedby="" value={Date} onChange={e=>SetDate(e.target.value)}/>
    </div>


    <div className="mb-3 col-md-6">
      <label className="form-label">Value</label>
      <input type="number" className="form-control addValue" aria-describedby="" value={Value} onChange={e=>SetValue(e.target.value)}/>
    </div>
    <div className="mb-3 col-md-6">
      <label htmlFor="title" className="form-label">Description</label>
      <input type="text" className="form-control addDescrption" aria-describedby="" value={Description} onChange={e=>SetDescription(e.target.value)}/>
    </div>
    <div className="mb-3 col-md-12 text-right">
      <button type="submit" className="btn btn-primary addBtn">Add</button>
    </div>
  </form>
  )
}
export default memo(Form);
