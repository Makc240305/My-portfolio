import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-200 antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-neutral-900">
          <div class="absolute inset-0 bg-blue-700  bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
