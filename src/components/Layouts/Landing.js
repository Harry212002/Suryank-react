import React, { useState, useEffect } from "react";

export default function Landinge() {

  const codeString = `
document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const button = document.createElement("button");
  button.textContent = \`Click me: \${count}\`;

  button.addEventListener("click", () => {
    count++;
    button.textContent = \`Click me: \${count}\`;
  });

  document.body.appendChild(button);
});
`;

  return (
    <div className="bg-white dark:bg-black dark:text-white duration-300 font-sans">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-10 min-h-[70vh]">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            FUTURE-DRIVEN <br /> SOFTWARE <br />
            <span className="text-purple-600 dark:text-purple-400">&#123; DEVELOPMENT &#125;</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            We craft high-quality digital solutions that help businesses grow, scale,
            and innovate in a fast-changing world
          </p>
          <div className="flex gap-4 mt-6">
            <button className="btn-primary">
              Get Started →
            </button>
          </div>
        </div>

        {/* Code Block */}
        <div className="bg-[#1e1e1e] rounded-lg shadow-lg p-4 relative w-full md:w-[500px] mt-8 md:mt-0">
          <div className="flex items-center gap-2 absolute top-2 left-3">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <pre className="pt-6 text-sm font-mono text-white whitespace-pre-wrap">
            {codeString}
          </pre>
        </div>
      </section>
    </div>
  );
}
