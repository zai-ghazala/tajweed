import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Sheen from "../components/sheen";

export default function Tafashi() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
       <h1><span className="arabic">الاستطال</span> Al Istitaala</h1><p><b>
    The sound and breath spreads through the mouth</b></p>
       </div>
    <Accordion>
      <Sheen/>
    </Accordion>
    </>
  );
}
