import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Saa from "../components/taa";
import Haa from "../components/haa";
import Zaal from "../components/zaal";
import Zaai from "../components/zaai";
import Seen from "../components/seen";
import Sheen from "../components/sheen";
import Suad from "../components/suad";
import Duad from "../components/duad";
import ZaaHeavy from "../components/zaa-heavy";
import Gain from "../components/gain";
import Faa from "../components/faa";
import Waw from "../components/waw";
import SmallHaa from "../components/small-haa";
import Yaa from "../components/yaa";

export default function Rikawah() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>الرخاوة Al Rikawah</h1><p>
            <b>Sound is allowed to flow</b></p><p>All the letters <span class="except">except</span>
            {" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>{" "} and {" "}<span className="inline-block">لن عمر</span></p>
            </div>
    <Accordion>
      <Saa/>
      <Haa/>
      <Zaal/>
      <Zaai/>
      <Seen/>
      <Sheen/>
      <Suad/>
      <Duad/>
      <ZaaHeavy/>
      <Gain/>
      <Faa/>
      <Waw/>
      <SmallHaa/>
      <Yaa/>
    </Accordion>
    </>
  );
}
