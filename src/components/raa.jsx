import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Raa() {
  return (
    <div className="raa">
      <Accordion.Item eventKey="9">
        <Accordion.Header>ر</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer   
          
          src="/assets/audio/raa.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Tip of the tongue
          </p>
          <p>
            From the tip of the tongue, to what is opposite it, of the gums by
            the two top front teeth, near the makhraj of{" "}<span className="arabic">ن</span></p>
          <p>
            There is a tiny gap in the middle of the tongue – this is where the
            sound comes from, this stops takreer
          </p>
          <p>
            <span className="arabic">ر</span>{" "}is normally considered a “light” letter. Sound is directed
            outward, so tongue is flat
          </p>
          <p>
           <span className="arabic">ر</span>{" "} is heavy if the{" "}<span className="arabic">ر</span>{" "} has a fatha or dhamma on it, if the{" "}<span className="arabic">ر</span>{" "}is sakin
            and the letter before it is a fatha or dhamma
          </p>
          <p>
            Sound is directed to the top of the mouth, so tongue is dipped in
            middle to make sound heavy
          </p>
           <p>
            <Link href="/inharaf"><span className="arabic">الانحراف</span> Al Inharaf</Link>
          </p>
          <hr />
          <p>
            <Link href="/jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="/tawassut"><span className="arabic">التوسط</span> Al Tawassut / <span className="arabic">البينية</span> Al Bayniyyah</Link>
          </p>
  <p>
            <Link href="/istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="/infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <div>
              <img className="d-block mx-auto" src="/assets/diagrams/raa2.jpg" />
              <div className="carousel-caption">
              <p><b>Left</b> – Light <span className="arabic">ر</span></p>
                <p><b>Right</b> – Heavy <span className="arabic">ر</span></p></div>
              </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
