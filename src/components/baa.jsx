import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import baa from "../assets/audio/baa.mp3";
import img32 from "../assets/1/32.jpeg";

export default function Baa() {
  return (
    <div className="baa">
      <Accordion.Item eventKey="1">
        <Accordion.Header>ب</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={baa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - Lips come together then move apart for
            ب creating a bounce.
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

          <img className="d-block mx-auto" src={img32} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
