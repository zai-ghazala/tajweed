import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import yaa from "../assets/audio/yaa.mp3";
import img11 from "../assets/1/11.jpeg";

export default function Yaa() {
  return (
    <div className="yaa">
      <Accordion.Item eventKey="28">
        <Accordion.Header>ي</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={yaa} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Tongue letter</strong> - Middle of the tongue with the
            middle of the roof of the mouth
          </p>
         <p>
            <Link href="leen"><span class="arabic">اللین</span> Al Leen</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span class="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span class="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="istifal"><span class="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span class="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img11} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
