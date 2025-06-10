import React from "react";

const ColorfulSection = () => {
  return (
    <section
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{
        background: "linear-gradient(135deg, #facc15 0%, #22c55e 100%)",
      }}
    >
      <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
        Welcome to the Bright Side!
      </h2>
      <p className="max-w-xl text-yellow-100 mb-8 drop-shadow-md">
        This section highlights the synergy between energy and growth using
        vibrant yellow and refreshing green. Perfect for calls to action or
        eye-catching content.
      </p>
      <div className="flex gap-4">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          type="button"
        >
          Get Started
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          type="button"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ColorfulSection;
