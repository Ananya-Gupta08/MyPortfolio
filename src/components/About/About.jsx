import { FaGraduationCap, FaCode, FaUsers } from 'react-icons/fa'

function About() {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Currently pursuing a BTech in Computer Science and Engineering, focusing on software development, web technologies, and core programming fundamentals.'


    },
    {
      icon: FaCode,
      title: 'Passion',
      description: 'Passionate about full-stack development and building user-friendly applications using modern technologies like React, JavaScript, and Python.'

    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Enjoy collaborating in team environments, sharing ideas clearly, and contributing effectively through strong communication and leadership skills.'

    }
  ]

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium">
          A second-year BTech CSE student with a strong interest in full-stack development and digital marketing. I enjoy building practical web solutions and learning new technologies.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex justify-center mb-4">
                <item.icon className="text-4xl sm:text-5xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
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

