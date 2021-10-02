import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import seen from "../assets/audio/seen.mp3";
import img26 from "../assets/1/26.jpeg";

export default function Seen() {
  return (
    <div className="seen">
      <Accordion.Item eventKey="11">
        <Accordion.Header>س</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={seen} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth.
          </p>
          <p>Tongue relaxed as normal.</p>
         <p>
            <Link href="safeer">الصفیر As Safeer</Link></p>
          <hr />
         <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal">الاستفال Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img26} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
