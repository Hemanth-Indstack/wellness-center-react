import Counter from "../ui/Counter"

export default function About() {
  return (
    <section className="bg-[#f5f5f5] py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-[36px] font-semibold mb-8 text-gray-900">
              Wellness Center
            </h2>

            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Our wellness center is focused on helping individuals achieve
              balance, vitality, and long-term well-being through carefully
              designed holistic programs.
            </p>

            <p className="text-[16px] text-gray-700 leading-relaxed">
              We combine experienced specialists, proven therapies, and a calm
              environment to support both physical and mental health.
            </p>
          </div>

          {/* RIGHT: Animated Stats */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12">

            <div>
              <h3 className="text-[40px] font-semibold text-gray-900 mb-1">
                <Counter end={10000} suffix="+" />
              </h3>
              <p className="text-[15px] text-gray-600">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-[40px] font-semibold text-gray-900 mb-1">
                <Counter end={15} suffix="+" />
              </h3>
              <p className="text-[15px] text-gray-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-[40px] font-semibold text-gray-900 mb-1">
                <Counter end={20} suffix="+" />
              </h3>
              <p className="text-[15px] text-gray-600">
                Wellness Programs
              </p>
            </div>

            <div>
              <h3 className="text-[40px] font-semibold text-gray-900 mb-1">
                <Counter end={30} suffix="+" />
              </h3>
              <p className="text-[15px] text-gray-600">
                Expert Therapists
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
