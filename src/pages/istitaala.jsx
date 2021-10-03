import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Duad from "../components/duad";

export default function Istitaala() {
  return (
    <>
    <ScrollToTop/>
   <div className="tajweed-group">
      <h1><span class="arabic">الاستطال</span> Al Istitaala</h1><p><b>The forward movement of the
      tongue stretching from the back to the front</b></p>
      </div>
    <Accordion>
      <Duad/>
    </Accordion>
    </>
  );
}
