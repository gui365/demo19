import React from "react";

function Home() {
  return (
    <main className="home-main flex">
      <div className="home-welcome">
        <h2>Welcome</h2>
        <p>Ask yourself: What is cuter than a cat wrapped in a sheet of paper?</p>
        <p>Here at RoboCat we think the answer is <strong>"nothing can be cuter than that"</strong>!</p>
        <p>If you're a cat lover, you're definitely in the right place. Now go explore, enjoy and don't forget to subscribe to our blog</p>
      </div>
      <img id="cat-image" alt="cat wrapped in paper" src="https://static.india.com/wp-content/uploads/2015/11/089.jpg?impolicy=Medium_Resize&w=1200&h=800" />
    </main>
  );
}

export default Home;
