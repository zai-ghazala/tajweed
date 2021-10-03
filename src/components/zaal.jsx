import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import zaal from "../assets/audio/zaal.mp3";
import img28 from "../assets/1/28.jpeg";

export default function Zaal() {
  return (
    <div className="zaal">
      <Accordion.Item eventKey="8">
        <Accordion.Header>ذ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaal} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth
          </p>
          <p>Flat tongue as normal</p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
  <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img28} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
