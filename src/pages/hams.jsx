import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Taa from "../components/taa";
import Saa from "../components/saa";
import Haa from "../components/haa";
import Khaa from "../components/khaa";
import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Sheen from "../components/sheen";
import Suad from "../components/suad";
import Faa from "../components/faa";
import Kaaf from "../components/kaaf";
import SmallHaa from "../components/small-haa";

export default function Hams() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>الحمص Al Hams</h1>
    <p>
    <b>With airflow</b></p><p>
            {" "}<span className="inline-block">فحثه شخص سكت</span>{" "} “Fa-hathu-hu
            shakhsun sakath”
          </p>
          </div>
    <Accordion>
      <Taa/>
      <Saa/>
      <Haa/>
      <Khaa/>
      <Zaai/>
      <Seen/>
      <Sheen/>
      <Suad/>
      <Faa/>
      <Kaaf/>
      <SmallHaa/>
    </Accordion>
    </>
  );
}
