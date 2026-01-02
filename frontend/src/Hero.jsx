const Hero = () => {
  return (
    <section className="flex justify-center pt-10">
      <div className="p-5 mt-5 w-full max-w-5xl">
        <div className="text-center px-2">
          <h1 className="text-xl font-bold">Stories & Ideas </h1>
          <p className="text-xs p-1">
            Explore breathtaking landscape, iconic landmarks, and hidden gems
            around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
          <div>
            <img src="" alt="image here" className="h-50 border" />
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              voluptatum similique
            </p>
          </div>
          <div>
            <ul>
              <li>top1</li>
              <li>top2</li>
              <li>top3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
