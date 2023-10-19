import React from "react";
import "./Phonetics.css"; // Import the CSS file for styling

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {" "}
      {/* Make sure the className is defined in the CSS file */}
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
