const topics = [
  'Motorsport History',
  'Formula 1 Innovations',
  'Legendary Car Designers',
  'Rally Racing Techniques',
  'Supercars vs. Hypercars',
  'Classic Car Restoration',
  'Aerodynamics in Racing',
  'Engine Tuning and Performance',
  'Famous Le Mans Races',
  'Electric vs. Internal Combustion',
  'Drifting Techniques',
  'Iconic JDM Cars',
  'Porsche vs. Ferrari Rivalry',
  'Evolution of Car Safety',
  'Track Day Tips'
];

function Topics() {
  return (
    <div className="mt-8 rounded-lg p-4 shadow">
      <h3 className="mb-4 text-lg font-semibold">Topics For You</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span className="cursor-pointer rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-50 hover:bg-gray-300">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Topics;
