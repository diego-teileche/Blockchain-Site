import Card from "@components/Card"
import type { CollectionEntry } from "astro:content"
import { getPostColorFromCategory } from "@utils/postUtils"
import Tag from "@components/Tag"
import CutCornerButton from "@components/CutCornerButton"
import { twMerge } from "tailwind-merge"

const LatestPosts = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
  const { latestPosts } = props

  return (
    <section className="py-60">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Your portal to everything blockchain
          </h2>
          <p className="mt-8 text-center text-xl text-zinc-400 lg:text-2xl">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 1 || postIndex === 3) && "md:hidden",
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </div>

          <div className="mt-16 hidden flex-col gap-8 md:flex">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 0 || postIndex === 2) && "md:hidden",
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </div>
        </div>

        <div className="mt-48 flex justify-center md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
