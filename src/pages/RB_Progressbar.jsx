import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Progress() {
  const [value, setValue] = useState(40);

  const handleIncrease = () => {
    setValue(prev => Math.min(prev + 5, 100));
  }; 
  const decrease = () => {
    setValue(prev => Math.max(prev - 5, 0));
  };

  return (
    <div >
      <div className="d-flex  gap-2">
        <Button variant="primary" onClick={handleIncrease}>progress + 5%</Button>
        <Button variant="primary" onClick={decrease} >progress - 5%</Button>
      </div>
      <ProgressBar striped variant="success" now={value} label={`${value}%`} /> <br />
      <ProgressBar striped variant="danger" now={value} label={`${value}%`} /> <br />

      <br /><br />

      <Card style={{ width: '18rem' }}>
        <Card.Img />
        <Card.Body>
          <Card.Title> <h4 className="d-flex">Bootstrap Dashboard Application</h4> </Card.Title>
          <Card.Text>
            <div className="d-flex text-muted"> Web Development
            </div>
            <div className="d-flex" >
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </div>
            <Button variant="info text-white" className="d-flex">In Progress</Button>
            <br />
            <ProgressBar striped variant="info" now={value} label={`${value}%`} /> <br />

          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex  gap-3">
          <div className=" d-flex text-muted">Due Date <br />1 Jan 2022</div>
          <br />


          <div className="vr"></div>

          <small className="text-muted">Budget <br /> $123,00</small>
        </Card.Footer>
      </Card>
    </div>

  );
}

export default Progress;