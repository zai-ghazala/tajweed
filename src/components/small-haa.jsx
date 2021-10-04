import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import smallHaa from "../assets/audio/small-haa.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img1 from "../assets/1/1.jpeg";
import img3 from "../assets/1/3.jpeg";
import img4 from "../assets/1/4.jpeg";

export default function SmallHaa() {
  return (
    <div className="small-haa">
     <Accordion.Item eventKey="26">
        <Accordion.Header>ه</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src={smallHaa}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
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
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img3} />
              <Carousel.Caption>
                <p>When ء is sakinah, the vocal chords are closed</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img4} />
              <Carousel.Caption>
                <p>When ء and ه are mutharrikah, vocal chords are all open</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
