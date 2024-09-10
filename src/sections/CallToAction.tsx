import CutCornerButton from "@components/CutCornerButton"

const CallToAction = () => {
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-black">
          Ready to <span className="block">get started?</span>
        </h2>
        <p className="mt-8 text-center text-xl text-zinc-400">
          Start building using blockchain technology, with Blockforge
        </p>
        <div className="mt-12 flex justify-center">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
