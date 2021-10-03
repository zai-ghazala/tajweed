import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { HelmetProvider } from 'react-helmet-async';
import { ReactPwa } from "react-pwa-app";

/**
* Root of react site 
*
* Imports Helment provider for the page head
* And App which defines the content and navigation
*/

// Render the site https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <ReactPwa
    test //is to install in localhost, not required
    config={{
      swUrl: "/service-worker.js", // sw file in public
      onUpdate: (reg) => {
        alert("sw updated");
        console.log(reg);
      },
      onSuccess: (reg) => {
        alert("sw success installed");
        console.log(reg);
      },
    }}
  >
      <App />
  </ReactPwa>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept();
}
