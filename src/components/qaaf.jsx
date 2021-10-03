import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import qaaf from "../assets/audio/qaaf.wav";
import img7 from "../assets/1/7.jpeg";

export default function Qaaf() {
  return (
    <div className="qaaf">
      <Accordion.Item eventKey="20">
        <Accordion.Header>ق</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={qaaf} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching the
            soft fleshy part of roof of the mouth
          </p>
          <p>The tongue is dipped in the middle</p>
 <p>
            <Link href="qalqala"><span className="arabic">القلقلھ</span> Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img7} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
