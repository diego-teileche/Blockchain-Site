const Testimonials = () => {
  return (
    <section className="bg-zinc-800 py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16">
          {[...new Array(3)].fill(0).map((_, index) => (
            <blockquote key={index}>
              <p className="font-heading text-3xl font-black">
                &ldquo; Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Cumque, aut fugit voluptatum omnis excepturi reiciendis
                commodi explicabo corporis at sunt &rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="size-16 rounded-full bg-zinc-700"></div>
                  </div>
                  <div>
                    <div className="text-lg font-black not-italic">
                      Diego Tech
                    </div>
                    <div className="not-italic text-zinc-400">
                      React Developer - BlockLink
                    </div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
