import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (!props.phonetics || (!props.phonetics.text && !props.phonetics.audio)) {
    return null;
  }

  if (!props.phonetics.audio) {
    return <div className="Phonetics"></div>;
  }

  return (
    <div className="Phonetics">
      {props.phonetics.audio && (
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      {props.phonetics.text && (
        <span className="text">{props.phonetics.text}</span>
      )}
    </div>
  );
}
