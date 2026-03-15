import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

function CoreConcepts() {
	return (
		<Section title="Core Concepts" id="core-concepts">
			<ul>
				{CORE_CONCEPTS.map((concept_item) => (
					<CoreConcept key={concept_item.title} {...concept_item} />
				))}
			</ul>		
		</Section>
	);
}

export default CoreConcepts;