import CutCornerButton from "@components/CutCornerButton"
import Hexagon from "@components/Hexagon"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
        <div className="container">
          <div className="flex h-16 items-center justify-between md:h-20">
            <div>
              <img
                src="/logo.avif"
                className="relative sm:size-10 md:size-14"
                alt="Blockforge Logo"
              />
            </div>

            <div className="flex items-center gap-4">
              <CutCornerButton className="hidden md:inline-flex">
                Get Started
              </CutCornerButton>
              <div
                className="relative size-10"
                onClick={() => setIsOpen((curr) => !curr)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 -translate-y-1 bg-zinc-300 transition-all duration-500",
                      isOpen && "translate-y-0 rotate-45",
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 translate-y-1 bg-zinc-300 transition-all duration-500",
                      isOpen && "translate-y-0 -rotate-45",
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed left-0 top-0 z-30 size-full bg-zinc-900">
          <div className="absolute inset-2 z-0 mt-20 rounded-md bg-zinc-800">
            <div className="absolute left-full top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
              <Hexagon size={700} />
            </div>
            <div className="absolute left-full top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
              <Hexagon size={1100} />
            </div>

            <div className="flex h-full items-center justify-center">
              <nav className="flex flex-col items-center gap-12">
                {navLinks.map(({ title, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="font-heading text-4xl font-black text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
