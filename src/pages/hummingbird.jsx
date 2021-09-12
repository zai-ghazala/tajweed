import React from "react";

export default function Hummingbird() {
  return (
    <div className="page">
      <div className="project">
        <h1>
          <a href="http://hummingbird.zaiismail.net" target="_blank"
            rel="noreferrer">hummingbird</a>
        </h1>

        <p>
          This was my first foray into creating a React web app. I experimented
          with the{" "}
          <a href="http://poetrydb.org" target="_blank" rel="noreferrer">
            poetrydb
          </a>{" "}
          API and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/peterh32/react-drag-drop-container"
          >
            react-drag-drop-container
          </a>
          , and developed my responsive design skills.
        </p>
      </div>
        <img
          src="https://cdn.glitch.com/d7f5d655-bedb-46ba-b8a6-d3a4253e0b8b%2Fhummingbird-portrait.png?v=1631434824085"
          className="screenshot--portrait"
        />
        <img
          src="https://cdn.glitch.com/d7f5d655-bedb-46ba-b8a6-d3a4253e0b8b%2Fhummingbird-landscape.png?v=1631399201623"
          className="screenshot--landscape"
        />
    </div>
  );
}
