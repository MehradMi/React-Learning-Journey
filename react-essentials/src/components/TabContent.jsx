import { EXAMPLES } from "../data.js";

function TabContent({ clickedTopic }) {
  return (
    <>
      {!clickedTopic && <p>Please select a topic.</p>}
      {clickedTopic &&
        <div id="tab-content">
          <h3>{EXAMPLES[clickedTopic].title}</h3>
          <p>{EXAMPLES[clickedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[clickedTopic].code}</code>
          </pre>
        </div>
      }
    </>
  );
}

export default TabContent;
