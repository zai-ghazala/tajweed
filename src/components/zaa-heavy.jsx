import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import zaaHeavy from "../assets/audio/zaa-heavy.mp3";
import img28a from "../assets/1/28a.jpeg"

export default function ZaaHeavy() {
  return (
    <div className="zaa-heavy">
      <Accordion.Item eventKey="16">
        <Accordion.Header>ظ</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={zaaHeavy} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Tip of the tongue touching the
            bottom edges of the front two teeth.
          </p>{" "}
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped.
          </p>
          <hr />
          <p>
            <Link href="jahr">الجھر Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila">الإستــعلاء Al Isti’la</Link></p>
        <p>
            <Link href="itbaq">الاطباق Al Itbaq</Link></p>
          <img className="d-block mx-auto" src={img28a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
