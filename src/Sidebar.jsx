import React from "react";

function Sidebar({ setSelectedSection }) {
  const sections = ["Weather", "News", "Movies"];

  return (
    <aside className="bg-black text-white p-4 space-y-2">
      {sections.map((section) => (
        <button
          key={section}
          className="block w-full text-left px-2 py-1 hover:bg-gray-700 rounded"
          onClick={() => setSelectedSection(section)}
        >
          {section}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
