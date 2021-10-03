import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Alif() {
  return (
    <div className="alif">
      <Accordion.Item eventKey="0">
        <Accordion.Header>ا</Accordion.Header>
        <Accordion.Body>
          <p>See{" "}<span className="arabic">ء</span></p>
        </Accordion.Body>
      </Accordion.Item>
    </div>  
    );
}
