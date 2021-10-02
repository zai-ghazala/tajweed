import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Taa from "../components/taa";
import Saa from "../components/saa";
import Haa from "../components/haa";
import Khaa from "../components/khaa";
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
    <h1>الهمس Al Hams</h1>
    <p>
    <b>With airflow</b></p><p>
            {" "}<span className="inline-block">فحثه شخص سكت</span>
          </p>
          </div>
    <Accordion>
      <Taa/>
      <Saa/>
      <Haa/>
      <Khaa/>
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
