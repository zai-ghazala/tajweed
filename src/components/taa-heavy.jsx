import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import taaHeavy from "../assets/audio/taa-heavy.mp3";
import img27a from "../assets/1/27a.jpeg"

export default function TaaHeavy() {
  return (
    <div className="taa-heavy">
      <Accordion.Item eventKey="15">
        <Accordion.Header>ط</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={taaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
 <p>
            <Link href="qalqala">القلقلھ Al Qalqala</Link></p>
          <hr />
          <p>
            <Link href="jahr">الجھر Al Jahr</Link> 
          </p>
 <p>
            <Link href="shiddah">الشدۃ Al Shiddah</Link></p>
          <p>
            <Link href="istila">الإستــعلاء Al Isti’la</Link></p>
        <p>
            <Link href="itbaq">الاطباق Al Itbaq</Link></p>
          <img className="d-block mx-auto" src={img27a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
