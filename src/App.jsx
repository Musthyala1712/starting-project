import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';



function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map(cc => {
            return <CoreConcept image={cc.image} title={cc.title} description={cc.description} />
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
            <TabButton> Components </TabButton>
            <TabButton> Jsx </TabButton>
            <TabButton> props </TabButton>
            <TabButton> state </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
