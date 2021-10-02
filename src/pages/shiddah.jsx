import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Taa from "../components/taa";
import Jeem from "../components/jeem";
import Daal from "../components/daal";
import TaaHeavy from "../components/taa-heavy";
import Kaaf from "../components/kaaf";
import Hamzah from "../components/hamzah";

export default function Shiddah() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>Al Shiddah</h1>
    <p><b>Sound is not allowed to flow</b></p>
    <p>{" "}<span className="inline-block">أَجِدْ قَطٍ بَكَتْ</span>
  </p>
  </div>
    <Accordion>
      <Baa/>
      <Taa/>
      <Jeem/>
      <Daal/>
      <TaaHeavy/>
      <Qaaf/>
      <Kaaf/>
      <Hamzah/>
    </Accordion>
    </>
  );
}
