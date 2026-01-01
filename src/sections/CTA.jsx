export default function CTA({ onBook }) {
  return (
    <section className="relative py-[160px] bg-[#f2f2f2] overflow-hidden">

      {/* Ambient background shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-[1250px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-[13px] font-medium">
              ● Trusted Wellness Experts
            </span>

            <h2 className="text-[40px] md:text-[54px] font-semibold leading-tight text-gray-900 mb-8">
              Begin Your Path to <br />
              <span className="text-blue-600">Total Well-Being</span>
            </h2>

            <p className="text-[17px] text-gray-700 leading-relaxed max-w-[520px] mb-10">
              Experience personalized wellness programs designed to restore balance,
              enhance vitality, and support long-term physical and mental health.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={onBook}
                className="
                  bg-blue-600 text-white
                  px-10 py-4 rounded-full
                  font-semibold
                  transition-all duration-300
                  hover:bg-blue-700 hover:-translate-y-1
                "
              >
                Book Appointment
              </button>

              <button
                className="
                  px-10 py-4 rounded-full
                  font-semibold
                  border border-gray-300
                  text-gray-900
                  transition-all duration-300
                  hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1
                "
              >
                Call +91 98765 43210
              </button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-10 text-sm text-gray-600">
              <div>
                <strong className="text-gray-900">10k+</strong><br />
                Happy Clients
              </div>
              <div>
                <strong className="text-gray-900">15+</strong><br />
                Years Experience
              </div>
              <div>
                <strong className="text-gray-900">30+</strong><br />
                Experts
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="
              relative rounded-[28px]
              bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700
              p-10 md:p-14
              text-white shadow-2xl overflow-hidden
            ">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />

              <h3 className="relative text-[28px] font-semibold mb-6">
                Why Choose Our Center?
              </h3>

              <ul className="relative space-y-4 text-[16px] text-blue-100">
                <li>✔ Personalized wellness plans</li>
                <li>✔ Certified therapists & doctors</li>
                <li>✔ Calm, modern healing environment</li>
                <li>✔ Holistic & science-backed approach</li>
              </ul>

              <div className="relative mt-10 pt-6 border-t border-white/30 text-sm">
                ⭐ Rated 4.9/5 by over 10,000 clients
              </div>
            </div>

            {/* Floating card */}
            <div className="
              absolute -bottom-10 -left-10
              bg-white rounded-2xl
              px-6 py-4 shadow-xl
              text-sm text-gray-800
            ">
              🌿 Natural & Safe Therapies
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
