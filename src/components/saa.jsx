import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Saa() {
  return (
    <div className="saa">
      <Accordion.Item eventKey="3">
      <Accordion.Header>ث</Accordion.Header>
      <Accordion.Body>
      <AudioPlayer
          
          src="/assets/audio/saa.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
        <p>
          <Link href="tongue">Tongue letter</Link> - Tip of the tongue touching the
          bottom edges of the top front teeth
        </p>
        <p>Flat tongue as normal</p>

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
        <img className="d-block mx-auto" src="/assets/diagrams/saa.png"/>
      </Accordion.Body>
    </Accordion.Item>
    </div>
    );
  }
