import { FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa'

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    description:
      'BTech Computer Science student with a strong foundation in programming, software engineering principles, and modern web technologies.'
  },
  {
    icon: FaCode,
    title: 'Passion',
    description:
      'Deeply interested in building clean, scalable full-stack applications with thoughtful user experience and maintainable code.'
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description:
      'Comfortable working in teams, communicating ideas clearly, and contributing meaningfully through ownership and consistency.'
  }
]

const GRADIENT =
  'linear-gradient(90deg, #3b0207 0%, #b52a00 35%, #ff9f1a 65%, #fff98a 100%)'

function About() {
  return (
    <section id="about" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
            About Me
          </h2>
          <div
            className="mx-auto mt-6 h-[3px] w-20 rounded-full"
            style={{ background: GRADIENT }}
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            I’m a second-year Computer Science student who enjoys building
            thoughtful digital experiences. I focus on clarity, structure, and
            long-term usability — whether I’m writing code, designing interfaces,
            or collaborating with a team.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-none">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group border border-none rounded-2xl p-8 transition-all duration-300
                         hover:-translate-y-2 hover:border-none hover:shadow-lg hover:shadow-black/10"
            >
              {/* Icon */}
              <div
                className="mb-6 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  background: GRADIENT
                }}
              >
                <item.icon className="text-white text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
