import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(
            (
              phonetic,
              index // Renamed phonetics to phonetic for each element
            ) => (
              <div key={index}>
                <Phonetics phonetics={phonetic} />{" "}
                {/* Changed phonetics to phonetic */}
              </div>
            )
          )}
        </section>
        {props.results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
