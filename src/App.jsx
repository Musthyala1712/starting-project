import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data'



function App() {

  const [selectedButton, setSelectedButton] = useState()

  function handleSelect(selectedContent) {
    setSelectedButton(selectedContent)
  }

  let tableContent = <p> Please select a Topic. </p>;

  if (selectedButton) {
    tableContent = (<div>
      <h1>
        {EXAMPLES[selectedButton].title}
      </h1>
      <p>
        {EXAMPLES[selectedButton].description}
      </p>
      <pre>
        <code>
          {EXAMPLES[selectedButton].code}
        </code>
      </pre>
    </div>)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(cc => {
              return <CoreConcept image={cc.image}
                title={cc.title} description={cc.description} />
            })}
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedButton === 'components'} onSelect={() => { handleSelect('components') }}> Components </TabButton>
            <TabButton isSelected={selectedButton === 'jsx'} onSelect={() => { handleSelect('jsx') }}> Jsx </TabButton>
            <TabButton isSelected={selectedButton === 'props'} onSelect={() => { handleSelect('props') }}> props </TabButton>
            <TabButton isSelected={selectedButton === 'state'} onSelect={() => { handleSelect('state') }}> state </TabButton>
          </menu>
        </section>
        {/* {!selectedButton && <p>
          Please select a Topic.
        </p>}
        {selectedButton && (<div>
          <h1>
            {EXAMPLES[selectedButton].title}
          </h1>
          <p>
            {EXAMPLES[selectedButton].description}
          </p>
          <pre>
            <code>
              {EXAMPLES[selectedButton].code}
            </code>
          </pre>
        </div>)} */}
        {tableContent}
      </main>
    </div>
  );
}