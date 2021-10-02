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
          bottom edges of the front two teeth.
        </p>
        <p>Flat tongue as normal.</p>

        <hr />

        <p>
            <Link href="hams">الحمص Al Hams</Link>
          </p>
        <p>
            <Link href="rikawah">الرخاوة Al Rikawah</Link>
          </p>
        <p>
          <strong>الاستفال Al Istifal </strong> -
          <b>
            Sound is directed downwards and outwards which gives the sound the
            quality of tarqeeq which is a lightness
          </b>
          - All letters except {" "}<span className="inline-block">خص ضغط قظ</span>{" "}
        </p>
        <p>
          <strong>الانفتاح Al Infitah</strong> -
          <b>Sound is not retained in the mouth</b> - All letters except ص ض ط
          ظ
        </p>
        <img className="d-block mx-auto" src={img28} />
      </Accordion.Body>
    </Accordion.Item>
    </div>
    );
  }
