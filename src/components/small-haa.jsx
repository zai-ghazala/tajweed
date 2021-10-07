import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function SmallHaa() {
  return (
    <div className="small-haa">
     <Accordion.Item eventKey="26">
        <Accordion.Header>ه</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src="/assets/audio/small-haa.wav"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
<div className="letter-info">
<div className="inner-info">
          <p>
            <Link href="throat">Throat letter</Link> - Furthest part, from the vocal
            chords
          </p>
          <hr/>
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
          </div>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto articulation-point" src="/assets/diagrams/small-haa.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto diagram-small" src="/assets/images/2.jpeg"/>
              <Carousel.Caption>
                <p>When <span className="arabic">ء</span> is sakinah, the vocal chords are closed</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto diagram-small" src="/assets/images/3.jpeg" />
              <Carousel.Caption>
                <p>When <span className="arabic">ء</span> and <span className="arabic">ه</span> are mutharrikah, vocal chords are all open</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
