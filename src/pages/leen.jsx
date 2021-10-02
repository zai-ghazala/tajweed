import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

import Yaa from "../components/yaa";

export default function Leen() {
  return (
    <>
    <div className="tajweed-group">
            <h1>اللین Al Leen</h1> - <p><b>Pronouncing the letter with ease, without jerking or raising
            the voice</b></p><p>ي and و sakinah preceded with
            fatha</p>
            </div>
    <Accordion>
      <Yaa/>
    </Accordion>
    </>
  );
}
