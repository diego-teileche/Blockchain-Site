const Testimonials = () => {
  return (
    <section>
      <div className="container">
        {[...new Array(3)].fill(0).map((_, index) => (
          <div key={index}>
            <blockquote>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cumque, aut fugit voluptatum omnis excepturi reiciendis commodi
                explicabo corporis at sunt
              </p>
              <cite>
                <div>
                  <div>
                    <div>avatar</div>
                  </div>

                  <div>
                    <div>Diego Tech</div>
                    <div>React Developer - BlockLink</div>
                  </div>
                </div>
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
