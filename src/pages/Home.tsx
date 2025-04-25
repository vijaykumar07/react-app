import React from "react";
import { useState } from "react";
import "../index.css";
import { Tab } from "../Tab";
import { Header } from "../Header";
import { CORE_CONCEPTS } from "../data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  interface TabClickHandler {
    (title: string): void;
  }

  const handleTabClick: TabClickHandler = (title) => {
    setActiveTab(title);
  };
  return (
    <>
      <Header data={CORE_CONCEPTS} />
      <main>
        <section id="examples">
          <nav className="menu">
            {CORE_CONCEPTS.map((item: { title: string | undefined; }, index: React.Key | null | undefined) => (
              <Tab
                key={index}
                isSelected={item.title === activeTab}
                title={item.title || "Untitled"}
                handleClick={handleTabClick}
              />
            ))}
          </nav>
        </section>
        <section id="tab-content">
          {!activeTab ? (
            <p>Select the tab to see tab content.</p>
          ) : (
            CORE_CONCEPTS.filter((item: { title: string; }) => item.title === activeTab).map(
              (item: { image: string | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                <div key={index} className="card">
                  <img src={item.image} alt={typeof item.title === "string" ? item.title : "Untitled"} />
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
