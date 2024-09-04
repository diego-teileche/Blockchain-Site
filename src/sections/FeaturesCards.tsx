const FeaturesCards = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-black">
          Discover the future of blockchain with Blockforge
        </h2>
        <div className="mt-36">
          <div className="group relative z-0 max-w-xs p-8">
            <div className="absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100"></div>
            <div className="absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400"></div>
            <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
            <div className="-mt-28 flex justify-center">
              <div className="relative inline-flex">
                <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/50"></div>
                <img
                  src="/assets/images/pill.png"
                  className="size-40 transition duration-300 group-hover:-translate-y-4"
                  alt="Pill Image | Blockchain Site - Diego Tech"
                />
              </div>
            </div>
            <h3 className="mt-12 font-heading text-3xl font-black">
              Revolutionary Blockchain API
            </h3>
            <p className="mt-4 text-lg text-zinc-400">
              Effortlessly integrate and manage blockchain dara with our
              cutting-edge API, designed for seamless connectivity
            </p>
            <div className="mt-12 flex justify-between">
              <button className="font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500">
                Learn More
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 -translate-x-2 text-zinc-500 transition duration-300 group-hover:translate-x-0 group-hover:text-zinc-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
            {[...new Array(4)].fill(0).map((_, i) => (
              <div
                key={i}
                className="size-2.5 cursor-pointer rounded-full bg-zinc-500"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesCards
