import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-200 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-[rgb(4,23,26)]">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(17,115,122,0.6)] opacity-80 blur-[250px]"></div>
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
