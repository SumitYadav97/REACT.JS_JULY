import React from 'react';
import { Figure } from 'react-bootstrap';
import MyScreenshot from './../assets/Figure.png';

const RB_Figure = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Figure>
        <Figure.Image
          width="100%"
          alt="React Features"
          src={MyScreenshot}
          style={{ borderRadius: "8px" }}
        />
 
        <Figure.Caption >
          <h6 className='d-flex'> Image Resource : Google.com
          </h6>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default RB_Figure;