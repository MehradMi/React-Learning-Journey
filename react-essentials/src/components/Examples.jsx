import { useState } from "react";
import TabButton from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
	const [clickedTopic, setClickedTopic] = useState("");
	const handleOnClick = (clickedTopic) => {
		setClickedTopic(clickedTopic);
	} 

	return (
    <Section title="Examples" id="examples">
      <Tabs
				ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
        <TabContent clickedTopic={clickedTopic}></TabContent>
      </Tabs>
    </Section>
  );
}

export default Examples;