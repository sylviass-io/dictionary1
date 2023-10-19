import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <div className="Definition">
            <strong>Definition:</strong> {definition.definition}
            <br />
            {definition.example && (
              <>
                <strong>Example: </strong>
                <em>{definition.example}</em>
                <br />
              </>
            )}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        </div>
      ))}
    </div>
  );
}
