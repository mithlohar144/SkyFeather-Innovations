const EfficiencyStats = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-agri-green mb-2">Rapid Coverage</h3>
        <p className="text-gray-600">Across Any Terrain</p>
        <p className="text-xs text-gray-400 mt-2">Efficient & Reliable</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-agri-green/20">
        <h3 className="text-4xl font-bold text-agri-green mb-2">95% Less</h3>
        <p className="text-gray-600">Water Usage Reduction</p>
        <p className="text-xs text-agri-green font-bold mt-2">Sustainable Tech</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-agri-green mb-2">100%</h3>
        <p className="text-gray-600">Target Coverage</p>
        <p className="text-xs text-gray-400 mt-2">Zero Compaction</p>
      </div>
    </div>
  </section>
);

export default EfficiencyStats;