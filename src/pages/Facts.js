import React, { useEffect, useState } from "react";
import API from "../api/API";

function Facts() {
  const [facts, setFacts] = useState([{ fact: 'Loading...' }]);

  useEffect(() => {
    API.getCatFacts().then(catFacts => {
      console.log(catFacts.data.data);
      setFacts(catFacts.data.data);
    });
  }, [])

  return (
    <main>
      <h2>Did you know?</h2>
      {
        <p>{facts[0].fact}</p>
      }
    </main>
  );
}

export default Facts;
