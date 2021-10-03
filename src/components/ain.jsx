import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import ain from "../assets/audio/ain.mp3";
import img5a from "../assets/1/5a.jpeg";

export default function Ain() {
  return (
    <div className="ain">
      <Accordion.Item eventKey="17">
        <Accordion.Header>ع</Accordion.Header>
        <Accordion.Body>
          <audio controls>
            <source src={ain} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>
            <strong>Throat letter</strong> - Middle of the throat, epiglottis,
            what stops food going into our windpipe when we eat
          </p>
          <p>Tongue is flat</p>
          <hr />
          <p>
            <Link href="jahr"><span class="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span class="arabic">التوسط</span> Al Tawassut / البينية Al Bayniyyah</Link>
          </p>
  <p>
            <Link href="istifal"><span class="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span class="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img5a} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
