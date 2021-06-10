import React, { useEffect, useState } from "react";
import API from "../api/API";
import Card from "../components/Card/Card";

function Facts() {
  // Replaces 'state' in a class component
  const [facts, setFacts] = useState([{ fact: 'Loading...' }]);

  // Replaces lifecycle methods in a class component
  useEffect(() => {
    API.getCatFacts().then(catFacts => {
      console.log(catFacts.data.data);
      setFacts(catFacts.data.data);
    });
  }, []);

  return (
    <main>
      <h2>Did you know?</h2>
      <section className="flex">
        {
          facts.map((f, index) => <Card fact={f.fact} index={index + 1} />)
        }
      </section>
    </main>
  );
}

export default Facts;
