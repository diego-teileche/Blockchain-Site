import CutCornerButton from "@components/CutCornerButton"
import TextButton from "@components/TextButton"

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
]

const FeaturesGrid = () => {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading text-4xl font-black md:text-5xl">
                Empowering the future of blackchain
              </h2>
              <p className="mt-8 text-xl text-zinc-400">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized applications
              </p>
              <ul className="mt-12 flex flex-col gap-8">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full outline outline-4 -outline-offset-4 outline-fuchsia-500/10">
                      <div className="size-1.5 rounded-full bg-fuchsia-500"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex gap-8">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div>
              <div className="relative z-0 inline-flex">
                <img
                  src="/assets/images/torus-knot.png"
                  className="size-96 max-w-none"
                  alt="Torus Knot 3D Image | Blockforge Site - Diego Tech"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  className="absolute top-3/4 -z-10 size-96 scale-x-[-1]"
                  alt="Hemisphere 3D Image | Blockforge Site - Diego Tech"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute right-0 z-0">
                <img
                  src="/assets/images/cone.png"
                  className="size-96 max-w-none rotate-12"
                  alt="Cone 3D Shape Image | Blockforge Site - Diego Tech"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  className="absolute left-0 top-3/4 -z-10"
                  alt="Hemisphere 3D Shape Image | Blockforge Site - Diego Tech"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading text-4xl font-black md:text-5xl">
                Blockforge leads the way
              </h2>
              <div className="mt-6 flex flex-col gap-6 text-xl text-zinc-400">
                <p>
                  Blockforge is dedicated to supporting the evolution of Web3
                  applications by delivering the necessary infrastructure and
                  security for Web3
                </p>
                <p>
                  Blockforge champions Web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockforge enables developers to
                  create scalable, user-friendly dApps with low transaction
                  costs, all while ensuring robust security
                </p>
              </div>
              <div className="mt-12 flex gap-8">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
