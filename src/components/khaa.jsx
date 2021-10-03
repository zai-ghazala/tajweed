import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import khaa from "../assets/audio/khaa.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img6 from "../assets/1/6.jpeg";

export default function Khaa() {
  return (
    <div className="khaa">
      <Accordion.Item eventKey="6">
        <Accordion.Header>خ</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          autoPlay
          src={khaa}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <strong>Throat letter</strong> - Closest to the mouth
          </p>
          <p>
            Note that the tongue is dipped in the middle so the sound is
            directed up to produce a heavy sound
          </p>
          <hr />
         <p>
            <Link href="hams"><span className="arabic">الهمس</span> Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          <img className="d-block mx-auto" src={img6} />
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
