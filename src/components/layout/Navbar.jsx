export default function Navbar({ onContact }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[80px] px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[22px] font-semibold tracking-wide text-gray-900">
            Wellness Center
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] text-gray-700">
          <a className="relative hover:text-blue-600 transition">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
          </a>

          <a className="hover:text-blue-600 transition">
            About Us
          </a>

          <a className="hover:text-blue-600 transition">
            Services
          </a>

          <button
            onClick={onContact}
            className="hover:text-blue-600 transition"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onContact}
            className="
              bg-blue-600 text-white
              px-6 py-2.5 rounded-full
              text-[14px] font-medium
              hover:bg-blue-700
              transition
            "
          >
            Book Appointment
          </button>
        </div>

      </div>
    </header>
  )
}
