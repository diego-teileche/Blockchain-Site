import Card from "@components/Card"
import type { CollectionEntry } from "astro:content"

const LatestPosts = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
  const { latestPosts } = props

  return (
    <section className="py-60">
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-black">
          Your portal to everything blockchain
        </h2>
        <p className="mt-8 text-center text-xl text-zinc-400">
          Keep up with the newest trends, updates, and insights in the
          blockchain world, updated weekly
        </p>

        <div className="mt-16 flex flex-col gap-8">
          {latestPosts.map(({ data: { title } }, postIndex) => (
            <Card key={postIndex} buttonText="Read More">
              <div className="inline-flex rounded-full bg-fuchsia-500/15 px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-fuchsia-500">
                Technology
              </div>
              <h3 className="mt-4 font-heading text-3xl font-black">{title}</h3>
              <p className="mt-6 text-lg text-zinc-400">
                Understanding the regulatory landscape surronding blockchain and
                what it means for the future of this technology
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
