const TechSpecs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-agri-dark">Versatile Use Cases</h2>
        {[
          { title: "Seeds", desc: "Perfect for cover crops, grasses, and restorative planting.", icon: "🌱" },
          { title: "Granular Fertilizers", desc: "Precise NPK application for optimal crop nutrition.", icon: "🌾" },
          { title: "Pesticides & Herbicides", desc: "Targeted granular treatments for pests and weed control.", icon: "🛡️" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-agri-dark">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-agri-dark text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-8">Technical Specifications</h3>
        <div className="space-y-6">
          {[
            { label: "Hopper Capacity", val: "50 KG" },
            { label: "Spreading Width", val: "7 - 10 Meters" },
            { label: "GPS Precision", val: "RTK (Centimeter)" },
            { label: "Flow Rate Control", val: "Digital/Automatic" },
            { label: "Flight Endurance", val: "Up to 25 mins" }
          ].map((spec, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 pb-4">
              <span className="opacity-60">{spec.label}</span>
              <span className="font-bold text-agri-green">{spec.val}</span>
            </div>
          ))}
        </div>
        {/* Subtle Drone Icon Background */}
        <div className="absolute -bottom-10 -right-10 opacity-10 text-9xl italic font-black">DRONE</div>
      </div>
    </div>
  </section>
);

export default TechSpecs;