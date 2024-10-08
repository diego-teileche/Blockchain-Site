import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Circle from "@components/Circle"
import CutCornerButton from "@components/CutCornerButton"
import Hexagon from "@components/Hexagon"

const Hero = () => {
  const icosaheadronRef = useRef(null)
  const cubeRef = useRef(null)
  const torusRef = useRef(null)
  const cuboidRef = useRef(null)

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress } = useScroll({
    target: icosaheadronRef,
    offset: ["start end", "end start"],
  })

  const iconsaheadronRotate = useTransform(scrollYProgress, [0, 1], [30, -15])
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45])
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20])
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20])

  return (
    <main>
      <section className="overflow-x-clip py-24 md:py-36">
        <div className="container">
          <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
            Introducing Blockforge
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
            The Future of Blockchain is Here
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
            Blockforge is pioneering smart contract integrity with cutting-edge
            data solutions
          </p>
          <div className="mt-10 flex justify-center">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
          <div className="mt-24 flex justify-center">
            <div className="relative z-0 mt-24 inline-flex">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[1100px]" size={1100} />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon
                  className="size-[1800px]"
                  size={1800}
                  reverse
                  duration={60}
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute -top-[900px] left-[250px]" animate>
                  <motion.img
                    src="/assets/images/cube.png"
                    ref={cubeRef}
                    className="size-[140px]"
                    style={{
                      rotate: cubeRotate,
                    }}
                    alt="Cube 3D Image | Diego Tech"
                  />
                </Circle>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute left-[200px] top-[270px]" animate>
                  <motion.img
                    src="/assets/images/cuboid.png"
                    ref={cuboidRef}
                    className="size-[140px]"
                    style={{
                      rotate: cuboidRotate,
                    }}
                    alt="Cuboid 3D Image"
                  />
                </Circle>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute -left-[600px] -top-[80px]">
                  <motion.img
                    src="/assets/images/torus.png"
                    ref={torusRef}
                    className="size-[140px]"
                    style={{
                      rotate: torusRotate,
                    }}
                    alt="Torus 3D Image"
                  />
                </Circle>
              </div>
              <motion.div
                ref={icosaheadronRef}
                className="inline-flex"
                style={{
                  rotate: iconsaheadronRotate,
                }}
              >
                <img
                  src="/assets/images/icosahedron.png"
                  className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
                  alt="Iconsaheadron 3D Image"
                />
                <img
                  src="/assets/images/icosahedron.png"
                  className="w-[500px]"
                  alt="Iconsaheadron 3D Image"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
            <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
              <motion.div
                animate={{
                  translateY: 12,
                  opacity: 0.2,
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="h-3 w-1 rounded-full bg-fuchsia-500"
              ></motion.div>
            </div>
            <p className="font-extrabold uppercase tracking-wider text-zinc-500">
              Scroll to learn more
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
