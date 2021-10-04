import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Baa from "../components/baa";
import Faa from "../components/faa";
import Meem from "../components/meem";
import Waw from "../components/waw";

export default function Lips() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
    <p>
    <h1>Lip Letters</h1>
  </p>
  </div>
    <Accordion>
      <Baa/>
      <Faa/>
      <Meem/>
      <Waw/>
    </Accordion>
    </>
  );
}
