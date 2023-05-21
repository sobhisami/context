import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Edit = ({SetDataSource,DataSource,Data}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   let OnEdit=(e)=>{
//     e.preventDefault();
//     const userExist = DataSource.find((el) => el.id === Data.id);
//     if (userExist) {
//       SetDataSource(
//         DataSource.map((el) => {
//           if (el.id === Data.id) {
//             return { ...Data };
//           } else {
//             return el;
//           }
//         })
//       );
//     } else {
//       SetDataSource((prev) => [...prev, Data]);
//   }
//   console.log(userExist);
// }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <FontAwesomeIcon icon={faEdit}/>
      </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Edit Uesr</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Value </Form.Label>
              <Form.Control
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description </Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <span> </span>
            <Button type='submit'  variant="primary" onClick={handleClose} >
            Update Data
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
      
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default memo(Edit) 

