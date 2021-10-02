import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "wouter";

import saa from "../assets/audio/saa.mp3";
import img28 from "../assets/1/28.jpeg";

export default function Saa() {
  return (
    <div className="saa">
      <Accordion.Item eventKey="3">
      <Accordion.Header>ث</Accordion.Header>
      <Accordion.Body>
        <audio controls>
          <source src={saa} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <p>
          <strong>Tongue letter</strong> - Tip of the tongue touching the
          bottom edges of the front two teeth
        </p>
        <p>Flat tongue as normal</p>

        <hr />

        <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
          <p>
            <Link href="istifal">الاستفال Al Istifal</Link>
          </p>
           <p>
            <Link href="infitah">الانفتاح Al Infitah</Link>
          </p>
        <img className="d-block mx-auto" src={img28} />
      </Accordion.Body>
    </Accordion.Item>
    </div>
    );
  }
