import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to <span>ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex gap-5 justify-center">
            <button className="btn btn-primary">
              {" "}
              <Link to={"/blogs"}>Read Blogs</Link>{" "}
            </button>
            <button className="btn btn-primary">
              <Link to={"/bookmarks"}>Bookmarks</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
