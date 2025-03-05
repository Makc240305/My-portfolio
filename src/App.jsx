import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-800 antialiased dark:text-stone-200">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(47,98,144,0.5)] opacity-50 blur-[80px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
