import React, {useState} from "react";
import { Router, Link } from "wouter";

import useRecorder from './components/use-recorder';

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";
import { registerSW } from 'virtual:pwa-register'

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";

import Offcanvas from "react-bootstrap/Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';

// Home function that is reflected across the site
export default function Home() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  const playAudio = () => {
    new Audio(audioURL).play();
  };

  const updateSW = registerSW({
    onOfflineReady() {},
  })


  function Menu() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="button"><button onClick={handleShow}>
        ☰
        </button></div>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p><b>Add this app! ✨</b></p>
<p><b>On iOS</b> click the share button then ‘add to homescreen’</p>
<p><b>On Android</b></p> click the Chrome menu button <b>⋮</b> and then ‘install app’
<p>This app works offline too</p>
            
            <div className="sources">
            <p><b>Sources</b></p>
            <p>Illustrations by Eman Atef</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
      <div className="return"><div className="recorder">
      <button onClick={startRecording} disabled={isRecording}>
      <span className="except">●</span>
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
      ❚❚
      </button>
      <button onClick={playAudio} disabled={audioURL === ""}>🔊</button>
      </div>
      <div className="menu"><Menu/>
      <Link href="/"><a><img src="/assets/images/home.png" alt="home"/></a></Link></div></div>
      <div className="content"><PageRouter /></div>
      </main>
    </Router>
  );
}
