import profilePhoto from '../../assets/profilepic.jpg'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          
          <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-7 opacity-0 animate-fade-in-up lg:animate-slide-in-left" style={{ animationFillMode: 'forwards' }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Ananya Gupta
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
            Full-Stack Developer
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium pt-1">
            Creating practical, user-focused web interfaces with modern technologies.
            </p>
            <div className="flex justify-center lg:justify-start pt-3 sm:pt-5">
              <a 
                href="https://github.com/Ananya-Gupta08"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg sm:text-xl">
                View My Work
              </a>
              
            </div>
          </div>

          {/* Profile Photo - Right on desktop, bottom on mobile */}
          <div className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 opacity-0 animate-fade-in-up lg:animate-slide-in-right" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
            <div className="relative w-full aspect-square mx-auto">
              {/* Main photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Ananya Gupta - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

