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
          <h2>Empowering the future of blackchain</h2>
          <p>
            Blockforge provides robust and secure infrastructure to support the
            next generation of decentralized applications
          </p>
          <ul>
            {listItems.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <CutCornerButton>Get Started</CutCornerButton>
            <TextButton>Learn More</TextButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
