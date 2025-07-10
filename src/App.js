import { useState } from 'react';
import './App.css';
import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
    index: "",
  }
  const [formData, setFormData] = useState(initialValue)
  const [userData, setUserData] = useState([])

  const checkUserDetails = userData.filter((data) => data.email === formData.email || data.phone === formData.phone)

  const handleSubmit = (event) => {
    if (checkUserDetails.length === 1) {
      alert("Data Exists....")
    } else {
      const { index, ...cleanData } = formData;
      if (index !== "") {
        const updatedData = [...userData];
        updatedData[index] = cleanData;
        setUserData(updatedData);

      } else {
        setUserData([...userData, cleanData])
      }
      setFormData(initialValue)
    }

    event.preventDefault();
  }

  const setValue = (event) => {
    const oldData = { ...formData }
    oldData[event.target.name] = event.target.value
    setFormData(oldData)
  }

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updatedUserData = userData.filter((_, i) => i !== index);
      setUserData(updatedUserData);
    }
  };



  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className='text-center mb-5'>
            <h1>Enquiry Form</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={setValue} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={setValue} />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={setValue} />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message" rows="3" value={formData.message} onChange={setValue}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
              <button type='button' onClick={() => setFormData(initialValue)} style={{ marginLeft: '5px' }} className="btn btn-danger">Clear</button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Message</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 ? userData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.message}</td>
                      <td><button onClick={() => setFormData({ index, ...data })} className='btn btn-primary' style={{ marginRight: "5px" }}>Edit</button> <button onClick={() => handleDelete(index)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                  )
                }) : (
                  <tr>
                    <td colSpan="6" className="text-center">No data available</td>
                  </tr>

                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
