import { useState } from "react";
import { Header } from "./Header";
import "./index.css";
import { CORE_CONCEPTS } from "./data";
import { Tab } from "./Tab";

function App() {
  const [activeTab, setActiveTab] = useState();
  const handleTabClick = (title) => {
    setActiveTab(title);
  };
  return (
    <>
      <Header data={CORE_CONCEPTS} />
      <main>
        <section id="examples">
          <nav className="menu">
            {CORE_CONCEPTS.map((item, index) => (
              <Tab
                key={index}
                isSelected={item.title === activeTab}
                title={item.title}
                handleClick={handleTabClick}
              />
            ))}
          </nav>
        </section>
        <section id="tab-content">
          {!activeTab ? (
            <p>Select the tab to see tab content.</p>
          ) : (
            CORE_CONCEPTS.filter((item) => item.title === activeTab).map(
              (item, index) => (
                <div key={index} className="card">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <code>{item.description}</code>
                </div>
              )
            )
          )}
        </section>
      </main>
    </>
  );
}

export default App;
