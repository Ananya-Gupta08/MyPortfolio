function About() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 text-center">
          About Me
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 sm:mb-10 text-center">
          I'm a passionate student developer with a keen interest in creating innovative web solutions. 
          I enjoy learning new technologies and applying them to solve real-world problems through code.
        </p>
        <ul className="space-y-4 sm:space-y-5 max-w-2xl mx-auto">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-lg">•</span>
            <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing my degree in Computer Science, focusing on web development and software engineering
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-lg">•</span>
            <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about building user-friendly applications with modern frameworks like React and Vue
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-lg">•</span>
            <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Always eager to collaborate on projects and contribute to open-source communities
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About

