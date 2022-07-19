import React, { useState } from 'react';

import "./App.css"

import Main from './components/main';

function App() {
  const [section, setSection] = useState("main")

  return (
    <>
      <Header section={section} setSection={setSection} />
        <div className="App">
          {section === "main" && < Main />}
        </div>
      <Footer />
    </>
  )
}

export default App;
