import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import kaaf from "../assets/audio/kaaf.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img8 from "../assets/1/8.jpeg";

export default function Kaaf() {
  return (
    <div className="kaaf">
      <Accordion.Item eventKey="21">
        <Accordion.Header>ك</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src={kaaf}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <Link href="tongue">Tongue letter</Link> - Back of the tongue touching where
            the hard part of the roof of the mouth meets the soft part
          </p>
          <hr />
         <p>
            <Link href="hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
 <p>
            <Link href="shiddah"><span className="arabic">الشدۃ</span> Al Shiddah</Link></p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img8} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
