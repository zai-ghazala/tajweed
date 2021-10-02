import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import daal from "../assets/audio/daal.mp3";
import img27 from "../assets/1/27.jpeg";

export default function Daal() {
  return (
    <div className="daal">
      <Accordion.Item eventKey="7">
        <Accordion.Header>د</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={daal} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
 <p>
            <Link href="qalqala">القلقلھ Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr">الجھر Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah">الشدۃ Al Shiddah</Link></p>
  <p>
            <Link href="istifal">الاستفال Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img27} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
