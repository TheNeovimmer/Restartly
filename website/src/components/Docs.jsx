import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const DocSection = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-32 mb-16 relative group">
    <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary hidden lg:block">
      <a href={`#${id}`} className="text-xl font-bold">#</a>
    </div>
    <h3 className="text-3xl font-bold mb-6 text-text tracking-tight">{title}</h3>
    <div className="text-muted leading-relaxed space-y-4 text-lg">
      {children}
    </div>
  </section>
);

const CodeBlock = ({ code, language = 'bash', title }) => (
    <div className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl">
        {title && (
            <div className="px-4 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">{title}</span>
                <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
            </div>
        )}
        <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed">
                <code className="language-bash text-gray-300">
                    {code.split(' ').map((word, i) => {
                         if (word.startsWith('-')) return <span key={i} className="text-blue-400">{word} </span>;
                         if (word === 'restartly') return <span key={i} className="text-green-400 font-bold">{word} </span>;
                         if (word.includes('"') || word.includes("'")) return <span key={i} className="text-yellow-300">{word} </span>;
                         return <span key={i}>{word} </span>;
                    })}
                </code>
            </pre>
        </div>
    </div>
);

const Docs = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      title: t('docs.nav.getting_started'),
      items: [
        { id: 'installation', label: t('docs.nav.installation') },
        { id: 'quick-start', label: t('docs.nav.quick_start') },
      ]
    },
    {
      title: t('docs.nav.configuration'),
      items: [
        { id: 'cli-flags', label: t('docs.nav.cli_flags') },
        { id: 'watch-paths', label: t('docs.nav.watch_paths') },
        { id: 'ignore-patterns', label: t('docs.nav.ignore_patterns') },
      ]
    },
    {
      title: t('docs.nav.advanced'),
      items: [
        { id: 'interactive', label: t('docs.nav.interactive') },
        { id: 'env-vars', label: t('docs.nav.env_vars') },
        { id: 'custom-exec', label: t('docs.nav.custom_exec') },
        { id: 'debouncing', label: t('docs.nav.debouncing') },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-bg relative">
        <div className="max-w-8xl mx-auto px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-24 left-0 h-[calc(100vh-6rem)] w-64 lg:w-full bg-bg/95 backdrop-blur-xl lg:bg-transparent border-r lg:border-none border-border z-40
                transform transition-transform duration-300 ease-in-out p-6 lg:p-0 overflow-y-auto
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="space-y-8">
                    {navigation.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary/80 mb-4">{group.title}</h4>
                            <ul className="space-y-2 border-l border-white/10 ml-1">
                                {group.items.map((item) => (
                                    <li key={item.id}>
                                        <a 
                                            href={`#${item.id}`}
                                            className={`
                                                block px-4 py-1.5 text-sm transition-all border-l -ml-px
                                                ${activeSection === item.id 
                                                    ? 'text-primary font-medium border-primary' 
                                                    : 'text-muted hover:text-text border-transparent hover:border-muted'}
                                            `}
                                            onClick={() => setIsMobileMenuOpen(false)}
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

            {/* Mobile Toggle */}
            <button 
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-bg rounded-full shadow-2xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Content */}
            <main className="max-w-4xl min-w-0">
                <div className="mb-16 pb-8 border-b border-white/10">
                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-white/50 mb-6">{t('docs.title')}</h1>
                    <p className="text-xl text-muted leading-relaxed max-w-2xl">
                        {t('docs.subtitle')}
                    </p>
                </div>

                <div className="space-y-24">
                     <DocSection id="installation" title={t('docs.installation.title')}>
                        <p>{t('docs.installation.description')}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <p className="text-sm font-bold text-text mb-3">{t('docs.installation.global')}</p>
                                <CodeBlock code="npm install -g restartly" title={t('docs.installation.global_term')} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text mb-3">{t('docs.installation.local')}</p>
                                <CodeBlock code="npm install --save-dev restartly" title={t('docs.installation.local_term')} />
                            </div>
                        </div>
                    </DocSection>

                    <DocSection id="quick-start" title={t('docs.quick_start.title')}>
                        <p>
                          <Trans i18nKey="docs.quick_start.description" components={[<code key="0" />]} />
                        </p>
                        <CodeBlock code="restartly index.js" title={t('docs.intro')} />
                        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl mt-6">
                            <p className="text-blue-200 text-sm">
                                <strong>{t('docs.note')}</strong> {t('docs.note_text')}
                            </p>
                        </div>
                    </DocSection>

                    <DocSection id="cli-flags" title={t('docs.cli_flags.title')}>
                        <p>{t('docs.cli_flags.description')}</p>
                        
                        <div className="mt-8 space-y-4">
                            {[
                                { flag: '--watch, -w', desc: t('docs.cli_flags.watch_desc'), default: '.' },
                                { flag: '--ignore, -i', desc: t('docs.cli_flags.ignore_desc'), default: 'node_modules, .git' },
                                { flag: '--exec, -x', desc: t('docs.cli_flags.exec_desc'), default: 'node' },
                                { flag: '--delay, -l', desc: t('docs.cli_flags.delay_desc'), default: '0' },
                                { flag: '--signal, -s', desc: t('docs.cli_flags.signal_desc'), default: 'SIGTERM' },
                            ].map(item => (
                                <div key={item.flag} className="p-4 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <code className="text-primary font-bold px-2 py-1 bg-primary/10 rounded-md self-start">{item.flag}</code>
                                        <span className="text-xs text-muted/50 font-mono">Default: {item.default}</span>
                                    </div>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </DocSection>

                    <DocSection id="watch-paths" title={t('docs.watch_paths.title')}>
                        <p><Trans i18nKey="docs.watch_paths.description" components={[<code key="0" />]} /></p>
                        <CodeBlock code="restartly server.js -w src -w public" title={t('docs.watch_paths.term_title')} />
                    </DocSection>

                     <DocSection id="ignore-patterns" title={t('docs.ignore_patterns.title')}>
                        <p>{t('docs.ignore_patterns.description')}</p>
                        <CodeBlock code="restartly app.js --ignore '**/*.test.js' --ignore 'logs/*'" title={t('docs.ignore_patterns.term_title')} />
                    </DocSection>

                    <DocSection id="interactive" title={t('docs.interactive.title')}>
                         <p>{t('docs.interactive.description')}</p>
                         <div className="mt-6 p-6 bg-black/50 rounded-xl border border-white/10 font-mono text-sm">
                            <div className="mb-2 text-muted">$ restartly app.js</div>
                            <div className="text-green-400 mb-4">› {t('docs.interactive.watching')}</div>
                            <div className="flex items-center gap-2 text-white">
                                <span>rs</span>
                                <span className="text-muted">{t('docs.interactive.manual')}</span>
                            </div>
                         </div>
                    </DocSection>
                </div>
            </main>
            </div>
        </div>
    </div>
  );
};

export default Docs;
