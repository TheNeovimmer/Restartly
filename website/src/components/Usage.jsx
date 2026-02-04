import React from 'react';

const UsageExample = ({ title, cmd, description }) => (
  <div className="bg-white/2 border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all">
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="text-white/40 text-sm mb-4">{description}</p>
    <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-primary border border-white/5">
      <span className="text-white/30 mr-2">$</span>
      {cmd}
    </div>
  </div>
);

const Usage = () => {
  return (
    <section id="usage" className="py-24 bg-white/1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Simple yet powerful</h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Restartly uses intuitive CLI flags that make it easy to configure your development environment 
              exactly how you need it. No complex config files, just clean commands.
            </p>
            
            <div className="space-y-6">
              <UsageExample 
                title="Watch specific directories"
                description="Monitor only the paths that matter for your current work."
                cmd="restartly app.js -w src lib"
              />
              <UsageExample 
                title="Ignore noisy patterns"
                description="Keep your console clean by ignoring logs or temporary files."
                cmd='restartly app.js -i "**/logs/*" "**/*.tmp"'
              />
              <UsageExample 
                title="Custom execution command"
                description="Run Python, Go, or any other runtime with ease."
                cmd='restartly -x "python3 main.py"'
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
            <div className="glass rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">CLI Reference</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--watch, -w</code>
                    <span className="text-white/40 text-xs">Default: .</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-full" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--ignore, -i</code>
                    <span className="text-white/40 text-xs">Default: node_modules, .git</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[85%]" />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <code className="text-primary font-bold">--exec, -x</code>
                    <span className="text-white/40 text-xs">Default: node</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[70%]" />
                  </div>
                </div>

                <div className="pt-8">
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-sm">
                    <p className="text-white/80 leading-relaxed italic">
                      "I needed a tool that was faster than nodemon and looked better 
                      in my neovim terminal. Restartly is exactly that."
                    </p>
                    <div className="mt-4 font-bold text-primary">— @TheNeovimmer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
