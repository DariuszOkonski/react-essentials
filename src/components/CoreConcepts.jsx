import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';

const CoreConcepts = () => {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((element) => (
          <CoreConcept key={element.title} {...element} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
