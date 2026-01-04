function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '📱'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦'
    }
  ]

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed">
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
        
        <div className="mb-8 sm:mb-10">
          <a
            href="mailto:your.email@example.com"
            className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            your.email@example.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="text-xl sm:text-2xl">{social.icon}</span>
              <span className="text-sm sm:text-base font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

