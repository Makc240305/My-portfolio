import { HERO_CONTENT } from "../constants";
import portfolio_image from "../assets/porfolio image.png";

function Hero() {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={portfolio_image}
              alt="Maksym Torbenko profile picture"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10"></div>
          <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
            Maksym Torbenko
          </h2>
          <span className="bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent">
            Front End Developer
          </span>
          <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            {HERO_CONTENT}
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
