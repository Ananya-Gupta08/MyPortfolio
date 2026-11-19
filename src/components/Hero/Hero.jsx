import { useEffect, useState } from "react"
import profilePhoto from "../../assets/profilepic.png"

const GRADIENT =
  "linear-gradient(90deg, #3b0207 0%, #b52a00 35%, #ff9f1a 65%, #fff98a 100%)"

// Coordinates are RELATIVE TO HERO CENTER
const bubbles = [
  // text bubbles
  { text: "About", size: 150, x: -380, y: -100, link: "#about" },
  { text: "Projects", size: 170, x: -300, y: 40, link: "#projects" },
  { text: "Skills", size: 200, x: 300, y: -90, link: "#skills" },
  { text: "Experience", size: 180, x: 320, y: 120, link: "#experience" },
  { text: "Contact", size: 210, x: 90, y: -290, link: "#contact" },

  // decorative bubbles
  { size: 90, x: -520, y: -60 },
  { size: 70, x: -450, y: 140 },
  { size: 80, x: -200, y: -220 },
  { size: 60, x: 240, y: 260 },
  { size: 75, x: 40, y: 60 },
  { size: 85, x: 520, y: -40 },
]

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      setScrollProgress(Math.min(window.scrollY / window.innerHeight, 1))
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative h-[200vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* HERO CANVAS */}
        <div className="relative w-full h-full flex items-end justify-center pb-24">

          {/* PHOTO */}
          <img
            src={profilePhoto}
            alt="Ananya Gupta"
            className="relative z-20 object-contain h-[500px]"
          />

          {/* BUBBLES */}
          {bubbles.map((b, i) => {
            const progress = 1 - scrollProgress
            const isHovered = hovered === i
            const repel = hovered !== null && hovered !== i ? 1.15 : 1

            return (
              <a
                key={i}
                href={b.link}
                onMouseEnter={() => b.text && setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="absolute z-10 rounded-full flex items-center justify-center
                           transition-all ease-out"
                style={{
                  width: b.size,
                  height: b.size,
                  background: isHovered ? GRADIENT : "#000",
                  color: "#fff",
                  left: "50%",
                  top: "50%",
                  transform: `
                    translate(
                      ${b.x * progress * repel}px,
                      ${b.y * progress * repel}px
                    )
                  `,
                  transitionDuration: "1100ms",
                }}
              >
                {b.text && (
                  <span className="text-sm sm:text-base font-semibold text-center px-4">
                    {b.text}
                  </span>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
