import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import faa from "../assets/audio/faa.mp3";
import img29 from "../assets/1/29.jpeg";

export default function Faa() {
  return (
    <div className="faa">
      <Accordion.Item eventKey="19">
        <Accordion.Header>ف</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={faa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Lip letter</strong> - The edge of the front top teeth
            touching the inside lower lip
          </p>
         <p>
            <Link href="hams"><span class="arabic">الهمس</span> Al Hams</Link>
          </p>
          <hr />
        <p>
            <Link href="rikawah"><span class="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span class="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span class="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img29} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
