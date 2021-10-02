
import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import jeem from "../assets/audio/jeem.mp3";
import img11b from "../assets/1/11b.jpeg";

export default function Jeem() {
    return (
    <div className="jeem">
     <Accordion.Item eventKey="4">
      <Accordion.Header>ج</Accordion.Header>
      <Accordion.Body>
        <audio controls>
          <source src={jeem} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <p>
          <strong>Tongue letter</strong> - Middle of the tongue with the
          middle of the roof of the mouth
        </p>
        <p>
            <Link href="qalqala">القلقلھ Al Qalqala</Link>
        </p>
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
        <img className="d-block mx-auto" src={img11b} />
      </Accordion.Body>
    </Accordion.Item>
</div>
);
}
