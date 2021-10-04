import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Haa from "../components/haa";
import Khaa from "../components/khaa";
import Ain from "../components/ain";
import Gain from "../components/gain";
import SmallHaa from "../components/small-haa";
import Hamzah from "../components/hamzah";

export default function Throat() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <p>
    <h1>Throat Letters</h1>
  </p>
  </div>
    <Accordion>
      <Haa/>
      <Khaa/>
      <Ain/>
      <Gain/>
      <SmallHaa/>
      <Hamzah/>
    </Accordion>
    </>
  );
}
