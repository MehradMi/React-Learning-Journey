import { useState } from "react";
import { CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";

function Main() {
	const [ clickedTopic, setClickedTopic ] = useState("");
	const handleOnClick = (clickedTopic) => {
		setClickedTopic(clickedTopic);
	}

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept_item) => (
            <CoreConcept key={concept_item.title} {...concept_item}></CoreConcept>
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={clickedTopic === "components"}
            onClick={() => handleOnClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={clickedTopic === "jsx"}
            onClick={() => handleOnClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={clickedTopic === "props"}
            onClick={() => handleOnClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={clickedTopic === "state"}
            onClick={() => handleOnClick("state")}
          >
            State
          </TabButton>
        </menu>
      </section>
      <TabContent clickedTopic={clickedTopic}></TabContent>
    </main>
  );
}

export default Main;