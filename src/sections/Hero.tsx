import CutCornerButton from "@/components/CutCornerButton"

const Hero = () => {
  return (
    <main>
      <section className="overflow-x-clip py-24">
        <div className="container">
          <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
            Introducing Blockforge
          </p>
          <h1 className="mt-4 text-center font-heading text-5xl font-black">
            The Future of Blockchain is Here
          </h1>
          <p className="mt-6 text-center text-xl text-zinc-400">
            Blockforge is pioneering smart contract integrity with cutting-edge
            data solutions
          </p>
          <div className="mt-10 flex justify-center">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
          <div className="relative z-0 mt-24 inline-flex">
            <img
              src="/assets/images/icosahedron.png"
              className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
              alt="Iconsaheadron 3D Image"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Iconsaheadron 3D Image"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
