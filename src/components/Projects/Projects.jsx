function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform with user authentication, shopping cart, and payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and drag-and-drop functionality.',
      techStack: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple cities.',
      techStack: ['JavaScript', 'API', 'CSS']
    }
  ]

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10 sm:mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

