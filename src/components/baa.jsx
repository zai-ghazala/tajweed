import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import baa from "../assets/audio/baa.wav";
import img32 from "../assets/1/32.jpeg";

export default function Baa() {
  return (
    <div className="baa">
      <Accordion.Item eventKey="1">
        <Accordion.Header>ب</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={baa} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together then move apart for{" "}
            <span className="arabic">ب</span>{" "}creating a bounce
          </p>
          <p>Tongue relaxed as normal</p>
 <p>
            <Link href="qalqala"><span className="arabic">القلقلھ</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>

           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>

          <img className="d-block mx-auto" src={img32} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
