export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">Srikanta Sahu</h1>

      <p className="mt-6 text-2xl text-gray-300">
        Building AI Systems.
      </p>

      <p className="text-xl text-gray-400">
        Solving Business Problems.
      </p>

      <button className="mt-10 rounded-xl bg-white px-8 py-4 text-black font-semibold hover:bg-gray-300 transition">
        Explore My Work
      </button>
    </main>
  );
}