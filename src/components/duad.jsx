import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "wouter";

import duad from "../assets/audio/duad.wav";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import img19 from "../assets/1/19.jpeg";
import img20 from "../assets/1/20.jpeg";

export default function Suad() {
  return (
    <div className="duad">
      <Accordion.Item eventKey="14">
        <Accordion.Header>ض</Accordion.Header>
        <Accordion.Body>
        <AudioPlayer
          
          src={duad}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
          <p>
            <strong>Tongue letter</strong> - Sides of the tongue
          </p>
          <p>
            Touch the edge of tongue with the hard palate in front of the top
            front teeth
          </p>
          <p>
            Make contact with the makhraj of{" "}<span className="arabic">ل</span>{" "}but then put pressure on sides of
            tongue
          </p>
          <p>
            Tongue dipped in middle, sound is directed to the top of the mouth
            so is heavy and trapped
          </p>
     <p>
            <Link href="istitaala"><span className="arabic">الاستطال</span> Al Istitaala</Link></p>
          <hr />
          <p>
            <Link href="jahr"><span className="arabic">الجھر</span> Al Jahr</Link> 
          </p>
        <p>
            <Link href="rikawah"><span className="arabic">الرخاوة</span> Al Rikawah</Link>
          </p>
          <p>
            <Link href="istila"><span className="arabic">الإستــعلاء</span> Al Isti’la</Link></p>
        <p>
            <Link href="itbaq"><span className="arabic">الاطباق</span> Al Itbaq</Link></p>
          <Carousel nextLabel={null} prevLabel={null}>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img20} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block mx-auto" src={img19} />
              <Carousel.Caption>
                <p>
                  Pressure on both sides, but if not possible, then one side.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
