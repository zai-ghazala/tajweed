import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Taa() {
  return (
    <div className="taa">
      <Accordion.Item eventKey="2">
        <Accordion.Header>ت</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/taa.wav"
          onPlay={e => console.log("onPlay")} muted="true"
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="/tongue">Tongue letter</Link> – Where the extreme tip of the tongue
            touches the roots of the top front teeth
          </p>
          <p>Tongue relaxed as normal</p>

          <hr />

         <p>
            <Link href="/hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
 <p>
            <Link href="/shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
         <p>
            <Link href="/istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="/infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/taa.png" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
