function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Your Name
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
          Frontend Developer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Building beautiful and functional web experiences with modern technologies
        </p>
        <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg">
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Hero

