import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all duration-300">
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-primary/10 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-white/50 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "Built for Speed",
      description: "Leverages chokidar for native-level file system events, ensuring near-instant detection of changes."
    },
    {
      icon: "🎨",
      title: "Stunning CLI",
      description: "More than just a tool, Restartly provides a premium terminal experience with beautiful ASCII art and colors."
    },
    {
      icon: "⚡",
      title: "Smart Debouncing",
      description: "Intelligently groups multiple file changes to prevent redundant restarts and flickering during rapid development."
    },
    {
      icon: "🛠",
      title: "Highly Configurable",
      description: "Easy-to-use CLI flags for watching multiple paths, ignoring complex patterns, and custom execution commands."
    },
    {
      icon: "📦",
      title: "Modern Stack",
      description: "Written in TypeScript with ESM support, ensuring a robust and future-proof codebase."
    },
    {
      icon: "🛡",
      title: "Reliable Runner",
      description: "Clean process termination (SIGTERM/SIGINT) ensures your environment stays tidy after every restart."
    }
  ];

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why switch to Restartly?</h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          A fresh take on developer productivity with a faster heart and a better face.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
