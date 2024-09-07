const LatestPosts = () => {
  return (
    <section>
      <div className="container">
        <h2>Your portal to everything blockchain</h2>
        <p>
          Keep up with the newest trends, updates, and insights in the
          blockchain world, updated weekly
        </p>

        <div>
          {[...new Array(4)].fill(0).map((item, itemIndex) => (
            <div key={itemIndex}>
              <div>Technology</div>
              <h3>Regulatory Challenges Facing Blockchain</h3>
              <p>
                Understanding the regulatory landscape surronding blockchain and
                what it means for the future of this technology
              </p>
              <div>
                <button>Read more</button>
                <div>arrow</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
