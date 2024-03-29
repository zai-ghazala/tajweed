import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from '@wzhonggo/react-h5-audio-player';
import '@wzhonggo/react-h5-audio-player/lib/styles.css';

export default function Zaai() {
  return (
    <div className="zaai">
      <Accordion.Item eventKey="10">
        <Accordion.Header>ز</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer   
          
          src="/assets/audio/zaai.mp3"
          onPlay={e => console.log("onPlay")} 
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Extreme tip of the tongue touching
            the inner surface at the lower end of the bottom two front teeth
          </p>
          <p>Tongue relaxed as normal</p>
         <p>
            <Link href="/safeer"><span className="arabic">الصفیر</span> As Safeer</Link></p>
          <hr />
         <p>
            <Link href="/hams"><span className="arabic">الهمس</span> Al Hams</Link>
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
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/zaai.png"/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
