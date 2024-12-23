"use client";

import { useEffect } from "react";
import TatvaScroll from "tatva-scroll";

export default function Home() {
  useEffect(() => {
    const tatvaScroll = new TatvaScroll({
      lerp: 0.1,
      multiplier: 0.7,
      smoothWheel: true,
      smoothTouch: true,
    });

    // Optional: Clean up on component unmount
    return () => {
      tatvaScroll.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section
        id="section1"
        className="h-screen flex items-center justify-center bg-blue-500 text-white"
      >
        <h1 className="text-4xl">Section 1</h1>
      </section>
      <section
        id="section2"
        className="h-screen flex items-center justify-center bg-green-500 text-white"
      >
        <h1 className="text-4xl">Section 2</h1>
      </section>
      <section
        id="section3"
        className="h-screen flex items-center justify-center bg-red-500 text-white"
      >
        <h1 className="text-4xl">Section 3</h1>
      </section>
      <section
        id="section4"
        className="h-screen flex items-center justify-center bg-purple-500 text-white"
      >
        <h1 className="text-4xl">Section 4</h1>
      </section>
    </div>
  );
}
