import React from "react";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center px-8 pt-8 w-full">
        <span className="font-bold text-2xl">
          Tristan Gerber<span className="text-blue-600">.</span>
        </span>
        <nav className="space-x-8 text-xs tracking-widest">
          <a href="#" className="hover:underline">ABOUT</a>
          <a href="#" className="hover:underline">BLOG</a>
          <a href="#" className="hover:underline">BOOKS</a>
        </nav>
      </header>

      {/* Main Title */}
      <section className="flex-1 flex flex-col items-center justify-center relative w-full">
        <div className="absolute right-24 top-12 text-xs tracking-widest text-gray-700">[2025]</div>
        <div>

        <h1 className="text-[10vw] text-black font-black leading-none w-full text-left">
          Full Stack <span className="inline-block align-middle w-90 h-8 bg-black ml-4" />
        </h1>
        <div className="flex items-center mt-2 justify-start w-full">
                      <span className="custom-font text-[12vw]  text-black leading-none">Developper</span>
          <span className="ml-4 w-6 h-6 rounded bg-blue-800 inline-block custom-font text-[2vw] align-bottom" />
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-end px-8 pb-6 text-xs text-black w-full">
        <span>[CURRENTLY IN STRASBOURG]</span>
        <div className="text-right">
          <div>Tristan Gerber</div>
          <div>
            building website that just <a href="#" className="text-blue-600 underline">fits</a>.
          </div>
        </div>
      </footer>
    </main>
  );
}