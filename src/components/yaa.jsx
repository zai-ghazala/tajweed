import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Yaa() {
  return (
    <div className="yaa">
      <Accordion.Item eventKey="28">
        <Accordion.Header>ي</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer   
          
          src="/assets/audio/yaa.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Middle of the tongue with the
            middle of the roof of the mouth
          </p>
         <p>
            <Link href="/leen"><span className="arabic">اللین</span> Al Leen</Link></p>
          <hr />
          <p>
            <Link href="/jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="/rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
         <p>
            <Link href="/istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="/infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/yaa.jpg" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
