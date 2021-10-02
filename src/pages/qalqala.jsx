import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Jeem from "../components/jeem";
import Daal from "../components/daal";
import TaaHeavy from "../components/taa-heavy";
import Qaaf from "../components/qaaf";

export default function Qalqala() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <h1>القلقلھ Al Qalqala</h1><p><b>Bouncing of the
    sound from the makhraj in these sakinah letters after shiddah
    occurs</b></p>
    </div>
    <Accordion>
      <Baa/>
      <Jeem/>
      <Daal/>
      <TaaHeavy/>
      <Qaaf/>
    </Accordion>
    </>
  );
}
