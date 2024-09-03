import CutCornerButton from "@/components/CutCornerButton"

const Hero = () => {
  return (
    <main>
      <section>
        <div className="container">
          <p>Introducing Blockforge</p>
          <h1>The Future of Blockchain is Here</h1>
          <p>
            Blockforge is pioneering smart contract integrity with cutting-edge
            data solutions
          </p>
          <CutCornerButton>Get Started</CutCornerButton>
          <img
            src="/assets/images/icosahedron.png"
            alt="Iconsaheadron 3D Image"
          />
        </div>
      </section>
    </main>
  )
}

export default Hero
