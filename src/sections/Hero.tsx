import Circle from "@components/Circle"
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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[1800px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute -top-[900px] left-[250px]">
                  <img
                    src="/assets/images/cube.png"
                    className="size-[140px]"
                    alt="Cube 3D Image"
                  />
                </Circle>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute left-[200px] top-[270px]">
                  <img
                    src="/assets/images/cuboid.png"
                    className="size-[140px]"
                    alt="Cuboid 3D Image"
                  />
                </Circle>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute -left-[600px] -top-[80px]">
                  <img
                    src="/assets/images/torus.png"
                    className="size-[140px]"
                    alt="Torus 3D Image"
                  />
                </Circle>
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

          <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
            <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
              <div className="h-3 w-1 rounded-full bg-fuchsia-500"></div>
            </div>
            <p className="font-extrabold uppercase tracking-wider text-zinc-500">
              Scroll to learn more
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
