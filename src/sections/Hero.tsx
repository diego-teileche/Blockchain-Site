import CutCornerButton from "@components/CutCornerButton"
import Hexagon from "@components/Hexagon"

const Hero = () => {
  return (
    <main>
      <section className="overflow-x-clip py-24 md:py-52">
        <div className="container">
          <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
            Introducing Blockforge
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
            The Future of Blockchain is Here
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
            Blockforge is pioneering smart contract integrity with cutting-edge
            data solutions
          </p>
          <div className="mt-10 flex justify-center">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
          <div className="mt-24 flex justify-center">
            <div className="relative z-0 mt-24 inline-flex">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[1100px]" />
              </div>
              <img
                src="/assets/images/icosahedron.png"
                className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
                alt="Iconsaheadron 3D Image"
              />
              <img
                src="/assets/images/icosahedron.png"
                className="w-[500px]"
                alt="Iconsaheadron 3D Image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
