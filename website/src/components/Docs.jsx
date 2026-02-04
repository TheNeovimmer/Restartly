import React, { useState } from 'react';

const DocSection = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16">
    <h3 className="text-3xl font-bold mb-6 text-text">{title}</h3>
    <div className="text-muted leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const CodeBlock = ({ code, language = 'bash' }) => (
  <div className="bg-card rounded-xl p-6 font-mono text-sm text-primary border border-border my-6 overflow-x-auto">
    <pre><code>{code}</code></pre>
  </div>
);

const Docs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    {
      title: 'Getting Started',
      items: [
        { id: 'installation', label: 'Installation' },
        { id: 'quick-start', label: 'Quick Start' },
      ]
    },
    {
      title: 'Configuration',
      items: [
        { id: 'cli-flags', label: 'CLI Flags' },
        { id: 'watch-paths', label: 'Watch Paths' },
        { id: 'ignore-patterns', label: 'Ignore Patterns' },
      ]
    },
    {
      title: 'Advanced',
      items: [
        { id: 'custom-exec', label: 'Custom Execution' },
        { id: 'debouncing', label: 'Debouncing' },
      ]
    }
  ];

  return (
    <section id="docs" className="py-24 bg-bg relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden mb-8">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl glass border border-border text-text font-medium"
            >
              <span>Navigation</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`mt-2 glass rounded-xl border border-border overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 space-y-6">
                {navigation.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted/30 mb-3">
                      {group.title}
                    </h4>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary transition-colors block py-1"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              {navigation.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted/30 mb-4">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm font-medium text-muted hover:text-primary transition-colors block py-1"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="grow max-w-3xl">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-text">Documentation</h2>
              <p className="text-muted text-lg">
                Everything you need to know about setting up and using Restartly.
              </p>
            </div>

            <DocSection id="installation" title="Installation">
              <p>Restartly is designed to be lightweight and easy to install. You can add it globally to your system or use it as a development dependency in your project.</p>
              <p>To install globally via npm:</p>
              <CodeBlock code="npm install -g restartly" />
              <p>Or locally in your project:</p>
              <CodeBlock code="npm install --save-dev restartly" />
            </DocSection>

            <DocSection id="quick-start" title="Quick Start">
              <p>Once installed, you can start watching your application by passing the entry point script to the <code>restartly</code> command.</p>
              <CodeBlock code="restartly index.js" />
              <p>Restartly will start your script and begin watching the current directory for any changes. When a file is modified, the process will be automatically reloaded.</p>
            </DocSection>

            <DocSection id="cli-flags" title="CLI Flags">
              <p>Restartly provides a set of flags to customize its behavior. You can combine multiple flags to suit your development workflow.</p>
              <div className="space-y-6 mt-8">
                <div>
                  <h4 className="text-text font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2">--watch, -w</span>
                    <span className="text-xs text-muted/20 font-normal ml-auto">Default: .</span>
                  </h4>
                  <p className="text-sm">Comma-separated list of directories or files to watch for changes.</p>
                  <CodeBlock code="restartly app.js --watch src,config,lib" />
                </div>
                <div>
                  <h4 className="text-text font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2">--ignore, -i</span>
                    <span className="text-xs text-muted/20 font-normal ml-auto">Default: node_modules, .git</span>
                  </h4>
                  <p className="text-sm">Patterns to ignore. Supports glob patterns.</p>
                  <CodeBlock code="restartly app.js --ignore '**/*.test.js', 'docs/*'" />
                </div>
                <div>
                  <h4 className="text-text font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2">--exec, -x</span>
                    <span className="text-xs text-muted/20 font-normal ml-auto">Default: node</span>
                  </h4>
                  <p className="text-sm">The command used to execute the script.</p>
                  <CodeBlock code='restartly --exec "python3 main.py"' />
                </div>
              </div>
            </DocSection>

            <DocSection id="watch-paths" title="Watch Paths">
              <p>By default, Restartly watches the current working directory. If you need to watch specific folders, use the <code>--watch</code> flag.</p>
              <p>You can specify multiple paths by separating them with spaces or by using the flag multiple times.</p>
              <CodeBlock code="restartly server.js -w src -w public" />
            </DocSection>

            <DocSection id="ignore-patterns" title="Ignore Patterns">
              <p>To prevent unnecessary reloads, you can ignore certain files or directories. This is useful for temporary files, logs, or coverage reports.</p>
              <CodeBlock code="restartly app.js --ignore 'reports/**/*' --ignore 'tmp/*'" />
            </DocSection>

            <DocSection id="custom-exec" title="Custom Execution">
              <p>Restartly isn't limited to a single runtime. You can use it to watch and reload any process using the <code>--exec</code> flag.</p>
              <p>For example, to watch and reload a Python script:</p>
              <CodeBlock code='restartly --exec "python3 api.py"' />
              <p>Or even a compiled binary:</p>
              <CodeBlock code='restartly --exec "./my-binary"' />
            </DocSection>

            <DocSection id="debouncing" title="Debouncing">
              <p>When multiple files are saved simultaneously (e.g., during a git pull or an IDE "save all" action), Restartly uses debouncing to avoid flickering and rapid-fire reloads.</p>
              <p>The default debounce interval is 200ms, but you can customize it with the <code>--debounce</code> flag.</p>
              <CodeBlock code="restartly app.js --debounce 500" />
            </DocSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
