import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Khaa from "../components/khaa";
import Suad from "../components/suad";
import Duad from "../components/duad";
import TaaHeavy from "../components/taa-heavy";
import ZaaHeavy from "../components/zaa-heavy";
import Gain from "../components/gain";
import Qaaf from "../components/qaaf";

export default function Istila() {
  return (
  <>
  <ScrollToTop/>
  <div className="tajweed-group">
       <h1>الإستــعلاء Al Isti’la</h1><p>
            <b>
              Sound is directed upwards between the tongue and the top palate.
              (Up and inside) This gives the letter the quality of tafkheem
              which is a thick heaviness
            </b></p>
            <p>{" "}<span className="inline-block">خص ضغط قظ</span>{" "}
          </p>
          </div>
    <Accordion>
      <Khaa/>
      <Suad/>
      <Duad/>
      <TaaHeavy/>
      <ZaaHeavy/>
      <Gain/>
      <Qaaf/>
    </Accordion>
    </>
  );
}
