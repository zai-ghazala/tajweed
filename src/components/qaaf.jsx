import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import qaaf from "../assets/audio/qaaf.mp3";
import img7 from "../assets/1/7.jpeg";

export default function Qaaf() {
  return (
    <div className="qaaf">
      <Accordion.Item eventKey="20">
        <Accordion.Header>ق</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={qaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching the
            soft fleshy part of roof of the mouth.
          </p>
          <p>The tongue is dipped in the middle.</p>
 <p>
            <Link href="qalqala">القلقلھ Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr">الجھر Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila">الإستــعلاء Al Isti’la</Link></p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img7} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
