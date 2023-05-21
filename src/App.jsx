import { Form ,Table } from './componant'
import logo from './resources/img/m1.png'
const App = () => {

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6">
        <img src={logo}className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
        <div className="row tit">
          <h4 className="">wellcom to sobhi Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <Form/>
      </div>
    </div>

    <div className="row mt-5 mb-5">
      <div className="custom-card ">
       <Table/>
      </div>
    </div>
  </div>
  )
}

export default App
