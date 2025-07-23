import React from "react";
import Sidebar from "./Sidebar";
import MainPanel from "./MainPanel";

function App() {
  const [selectedSection, setSelectedSection] = React.useState("Welcome");

  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr]">
      <Sidebar setSelectedSection={setSelectedSection} />
      <MainPanel selectedSection={selectedSection} />
    </div>
  );
}

export default App;
