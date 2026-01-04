function Skills() {
  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Git',
    'Node.js',
    'Python'
  ]

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 text-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

