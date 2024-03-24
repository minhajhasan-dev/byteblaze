import wave from "../assets/wave.svg";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero />
      <img className="absolute bottom-0 w-full" src={wave} />
    </div>
  );
};

export default Home;
