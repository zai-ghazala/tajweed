import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import haa from "../assets/audio/haa.mp3";
import img5 from "../assets/1/5.jpeg";

export default function Haa() {
  return (
    <div className="haa">
      <Accordion.Item eventKey="5">
        <Accordion.Header>ح</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={haa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat
          </p>

          <p>Tongue is flat</p>
          <hr />
         <p>
            <Link href="hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img5} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
