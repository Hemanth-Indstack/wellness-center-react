export default function Services() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-[38px] font-bold text-center mb-20">
          What We Offer
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Card 1 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a"
              alt="Meditation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10 p-8 text-center">
              <h3 className="text-[22px] font-semibold mb-4">
                Meditation
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Reduce stress and enhance clarity through guided meditation practices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Aromatherapy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10 p-8 text-center">
              <h3 className="text-[22px] font-semibold mb-4">
                Aromatherapy
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Healing with essential oils to restore balance and energy.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883"
              alt="Massage"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10 p-8 text-center">
              <h3 className="text-[22px] font-semibold mb-4">
                Massage
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Professional massage therapy to relax muscles and improve circulation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pilates"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10 p-8 text-center">
              <h3 className="text-[22px] font-semibold mb-4">
                Pilates
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Build strength, flexibility, and body awareness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
