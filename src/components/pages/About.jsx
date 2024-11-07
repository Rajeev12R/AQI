import React from "react";

const pollutionData = [
  {
    title: "What is Air Pollution?",
    description:
      "Air pollution is the presence of harmful or excessive substances in the air we breathe. These pollutants come from both human and natural sources, including factories, vehicles, and wildfires. They have severe impacts on health, ecosystems, and climate.",
  },
  {
    title: "Main Causes of Air Pollution",
    description:
      "The primary sources of air pollution are industrial emissions, burning of fossil fuels for energy and transportation, agriculture, and waste disposal. Natural causes include volcanic eruptions, dust storms, and wildfires, which release pollutants into the atmosphere.",
  },
  {
    title: "Types of Pollutants",
    description:
      "Common pollutants include particulate matter (PM2.5 and PM10), nitrogen dioxide (NO2), sulfur dioxide (SO2), carbon monoxide (CO), and ground-level ozone (O3). These pollutants have various health and environmental effects depending on their type and concentration.",
  },
  {
    title: "Health Impacts",
    description:
      "Exposure to air pollution can lead to respiratory diseases, cardiovascular conditions, and even cancer. Children, elderly people, and those with pre-existing health conditions are especially vulnerable to the harmful effects of air pollution.",
  },
  {
    title: "Environmental Consequences",
    description:
      "Air pollution damages ecosystems by harming vegetation, acidifying water bodies, and reducing biodiversity. It also contributes to global warming through greenhouse gases, which trap heat in the atmosphere, leading to climate change.",
  },
  {
    title: "How Can We Mitigate Air Pollution?",
    description:
      "Mitigating air pollution requires efforts on both individual and systemic levels. This includes reducing energy consumption, switching to renewable sources, minimizing car usage, supporting emission regulations, and planting trees.",
  },
];

function AboutAirPollution() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Air Pollution
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {pollutionData.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutAirPollution;
