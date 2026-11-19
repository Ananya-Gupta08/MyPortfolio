import { useState } from 'react'
import profilePhoto from '../../assets/profilepic.png'

const GRADIENT =
  "linear-gradient(90deg, #3b0207 0%, #b52a00 35%, #ff9f1a 65%, #fff98a 100%)"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-xxl sm:text-3xl font-bold text-black"
          >
           
            <span>Ananya Gupta</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm lg:text-base font-medium text-black rounded-lg overflow-hidden transition-colors duration-300"
                style={{
                  backgroundImage: GRADIENT,
                  backgroundSize: '0% 100%',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-size 300ms ease, color 300ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundSize = '100% 100%'
                  e.currentTarget.style.color = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundSize = '0% 100%'
                  e.currentTarget.style.color = '#000000'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-black/5 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2 text-base font-medium text-black rounded-lg transition"
                  style={{
                    backgroundImage: GRADIENT,
                    backgroundSize: '0% 100%',
                    backgroundRepeat: 'no-repeat'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundSize = '100% 100%'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundSize = '0% 100%'
                    e.currentTarget.style.color = '#000000'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
