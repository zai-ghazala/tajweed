import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import ScrollToTop from "../components/scroll-to-top.jsx";

import Waw from "../components/waw";
import Yaa from "../components/yaa";

export default function Leen() {
  return (
    <>
    <ScrollToTop/>
    <div className="tajweed-group">
            <h1><span className="arabic">اللین</span> Al Leen</h1><p><b>Pronouncing the letter with ease, without jerking or raising
            the voice</b></p><p><span className="arabic">ي</span>{" "}          
            and <span className="arabic">و</span> sakinah preceded with
            fatha</p>
            </div>
    <Accordion>
      <Waw/>
      <Yaa/>
    </Accordion>
    </>
  );
}
