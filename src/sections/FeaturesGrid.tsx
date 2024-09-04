import CutCornerButton from "@components/CutCornerButton"
import TextButton from "@components/TextButton"

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
]

const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div>
          <h2 className="font-heading text-4xl font-black">
            Empowering the future of blackchain
          </h2>
          <p className="mt-8 text-xl text-zinc-400">
            Blockforge provides robust and secure infrastructure to support the
            next generation of decentralized applications
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
      </div>
    </section>
  )
}

export default FeaturesGrid
