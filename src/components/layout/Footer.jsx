export default function Footer({ onBook }) {
  return (
    <footer className="bg-[#0b1220] text-gray-300">

      {/* TOP CTA STRIP */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-14">
          <div className="
            flex flex-col md:flex-row items-center justify-between gap-8
            rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700
            px-10 py-10 text-white
          ">

            <div>
              <h3 className="text-[24px] md:text-[28px] font-semibold mb-1">
                Ready to start your wellness journey?
              </h3>
              <p className="text-blue-100 text-[15px]">
                Book your consultation today and take the first step.
              </p>
            </div>

            <button
              onClick={onBook}
              className="
                bg-white text-blue-600
                px-8 py-4 rounded-full
                font-semibold
                transition-all duration-300
                hover:bg-blue-50 hover:-translate-y-1
              "
            >
              Book Appointment
            </button>

          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-[22px] font-semibold text-white mb-4">
              Wellness Center
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-400 mb-6">
              Helping you achieve balance, vitality, and peace through holistic
              wellness programs and expert care.
            </p>

            <div className="flex gap-4 text-lg text-gray-400">
              <span className="hover:text-white cursor-pointer">🌐</span>
              <span className="hover:text-white cursor-pointer">📘</span>
              <span className="hover:text-white cursor-pointer">📸</span>
              <span className="hover:text-white cursor-pointer">🐦</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-5 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li className="hover:text-white cursor-pointer">Meditation</li>
              <li className="hover:text-white cursor-pointer">Therapy</li>
              <li className="hover:text-white cursor-pointer">Massage</li>
              <li className="hover:text-white cursor-pointer">Wellness Plans</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-5 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Experts</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-5 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4 text-[15px] text-gray-400">
              <li>📍 Hyderabad, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@wellnesscenter.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="
          max-w-[1200px] mx-auto px-6 py-6
          flex flex-col md:flex-row items-center justify-between gap-4
          text-[14px] text-gray-500
        ">
          <p>© {new Date().getFullYear()} Wellness Center. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
