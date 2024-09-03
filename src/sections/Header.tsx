import CutCornerButton from "@/components/CutCornerButton"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex h-20 items-center justify-between md:h-24">
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
            <div className="relative size-10">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 -translate-y-1 bg-zinc-300"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 translate-y-1 bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
