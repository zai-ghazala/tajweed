import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import sheen from "../assets/audio/sheen.mp3";
import img11a from "../assets/1/11a.jpeg";

export default function Sheen() {
  return (
    <div className="sheen">
      <Accordion.Item eventKey="12">
        <Accordion.Header>ش</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={sheen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth
          </p>
          <p>
            <Link href="tafashi">التفشي Al Tafashi</Link></p>
          <hr />
         <p>
            <Link href="hams"><span className="arabic">الهمس</span> Al Hams</Link>
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
          <img className="d-block mx-auto" src={img11a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
