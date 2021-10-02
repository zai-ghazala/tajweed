import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import taa from "../assets/audio/taa.mp3";
import img27 from "../assets/1/27.jpeg";

export default function Taa() {
  return (
    <div className="taa">
      <Accordion.Item eventKey="2">
        <Accordion.Header>ت</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={taa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Where the extreme tip of the tongue
            touches the roots of the top front teeth
          </p>
          <p>Tongue relaxed as normal</p>

          <hr />

         <p>
            <Link href="hams">الهمس Al Hams</Link>
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
