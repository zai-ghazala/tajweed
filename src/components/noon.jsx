import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Noon() {
  return (
    <div className="noon">
      <Accordion.Item eventKey="24">
        <Accordion.Header>ن</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/noon.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="tongue">Tongue letter</Link> – Tip of the tongue
          </p>
          <p>
            From the tip of the tongue (to what lies opposite it) to the gums,
            slightly below the makhraj of{" "}<span className="arabic">ل
          </span></p>
          <p>Closer to the front teeth than the {" "}<span className="arabic">ل
          </span></p>
          <p>
            Comes from 2 main areas of makhraj – the tongue and the nose, this
            produces the ghunna sifah
          </p>
          <p>
            <Link href="ghunna"><span className="arabic">الغنھ</span> Al Ghunna</Link> 
          </p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
          <p>
            <Link href="tawassut"><span className="arabic">التوسط</span> Al Tawassut / <span className="arabic">البينية</span> Al Bayniyyah</Link>
          </p>
         <p>
            <Link href="istifal"><span className="arabic">الاستفال</span> Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah"><span className="arabic">الانفتاح</span> Al Infitah</Link>
          </p>
          </div>
          <img className="d-block mx-auto articulation-point" src="/assets/diagrams/noon.png" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
