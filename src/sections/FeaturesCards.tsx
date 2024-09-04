const FeaturesCards = () => {
  return (
    <section>
      <div className="container">
        <h2>Discover the future of blockchain with Blockforge</h2>
        <div>
          <div>
            <img
              src="/assets/images/pill.png"
              alt="Pill Image | Blockchain Site - Diego Tech"
            />
            <h3>Revolutionary Blockchain API</h3>
            <p>
              Effortlessly integrate and manage blockchain dara with our
              cutting-edge API, designed for seamless activity
            </p>
            <div className="flex">
              <button>Learn More</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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

        <div>
          <div>
            {[...new Array(4)].fill(0).map((_, i) => (
              <div key={i}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesCards
