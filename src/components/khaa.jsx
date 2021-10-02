import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import khaa from "../assets/audio/khaa.mp3";
import img6 from "../assets/1/6.jpeg";

export default function Khaa() {
  return (
    <div className="khaa">
      <Accordion.Item eventKey="6">
        <Accordion.Header>خ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={khaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Closest to the mouth.
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound.
          </p>
          <hr />
         <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila">الإستــعلاء Al Isti’la</Link></p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img6} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
