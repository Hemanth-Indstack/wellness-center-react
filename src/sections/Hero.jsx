export default function Hero({ onContact }) {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773)",
      }}
    >
      <div className="bg-white/80">
        <div className="max-w-[1200px] mx-auto px-6 py-[140px]">

          <div className="max-w-[600px]">
            <h1 className="text-[44px] font-semibold leading-tight mb-6 text-gray-900">
              Transform your health – embrace life today!
            </h1>

            <p className="text-[17px] text-gray-700 mb-10 leading-relaxed">
              Achieve your wellness goals with personalized guidance, expert
              support, and holistic therapies designed for long-term health.
            </p>

            <div className="flex gap-4 mb-6">
              <button className="bg-blue-600 text-white px-8 py-3 text-[15px]">
                Learn More
              </button>

              {/* ✅ CONNECTED BUTTON */}
              <button
                onClick={onContact}
                className="border border-gray-400 text-gray-800 px-8 py-3 text-[15px] hover:border-blue-600 hover:text-blue-600 transition"
              >
                Contact Us
              </button>
            </div>

            <p className="text-[16px] font-medium text-gray-800">
              Call us: (123) 456-7890
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
