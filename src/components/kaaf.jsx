import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import kaaf from "../assets/audio/kaaf.mp3";
import img8 from "../assets/1/8.jpeg";

export default function Kaaf() {
  return (
    <div className="kaaf">
      <Accordion.Item eventKey="21">
        <Accordion.Header>ك</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={kaaf} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Back of the tongue touching where
            the hard part of the roof of the mouth meets the soft part
          </p>
          <hr />
         <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
 <p>
            <Link href="shiddah">الشدۃ Al Shiddah</Link></p>
         <p>
            <Link href="istifal">الاستفال Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img8} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
