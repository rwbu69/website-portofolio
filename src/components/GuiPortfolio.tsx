import { useState, useEffect } from 'react';
import { type Language } from '../data/terminalData';
import { about } from '../data/about';
import { skills } from '../data/skills';

export default function GuiPortfolio({ 
  onClose, 
  lang 
}: { 
  onClose: () => void;
  lang: Language;
}) {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    // Inject class to body for bright theme
    document.body.style.background = '#f8fafc'; // slate-50
    document.body.style.color = '#1e293b'; // slate-800
    
    // Fetch blogs
    fetch('/api/blog/index.json')
      .then(r => r.json())
      .then(d => setBlogs(d))
      .catch(e => console.error(e));

    return () => {
      // Revert to global CSS gradient
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 font-sans absolute inset-0 z-50 overflow-y-auto">
      {/* Header / Nav */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Sebastian <span className="text-tosca">Vay</span> <span className="text-pink">Hutagalung</span>
          </div>
          <button 
            onClick={onClose}
            className="text-sm font-medium px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h2.293L8.146 2.354a.5.5 0 1 1 .708-.708L13 5.793V2a.5.5 0 0 1 .5-.5z"/>
              <path fillRule="evenodd" d="M2.5 14.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H3.707l4.147 4.146a.5.5 0 0 1-.708.708L3 10.207V14a.5.5 0 0 1-.5.5z"/>
            </svg>
            Return to CLI
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="py-12 border-b border-slate-200 mb-12">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {lang === 'id' ? 'Halo, Saya RWBU.' : 'Hello, I am RWBU.'}
          </h1>
          <div 
            className="text-lg text-slate-600 leading-relaxed max-w-3xl prose prose-slate prose-a:text-tosca prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: about[lang] }}
          />
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-tosca pl-4">
            {lang === 'id' ? 'Keahlian' : 'Skills'}
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <pre className="font-mono text-sm text-slate-700 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: skills[lang] }} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-pink pl-4">
            {lang === 'id' ? 'Proyek Unggulan' : 'Featured Projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                <img src="/projects/1.webp" alt="eSPMI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold tracking-wider text-tosca uppercase mb-2">Website</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">eSPMI Application</h3>
                <p className="text-slate-600 text-sm">{lang === 'id' ? 'Sistem Penjaminan Mutu Internal terintegrasi untuk instansi pendidikan.' : 'Integrated Internal Quality Assurance System for educational institutions.'}</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                <img src="/projects/3.webp" alt="Event Otaku" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold tracking-wider text-pink uppercase mb-2">Platform</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Otaku Event Mapping</h3>
                <p className="text-slate-600 text-sm">{lang === 'id' ? 'Platform pemetaan event dengan fitur lokasi geospasial.' : 'Event mapping platform with geospatial location features.'}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-tosca pl-4">
            {lang === 'id' ? 'Artikel Blog' : 'Blog Articles'}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {blogs.length > 0 ? blogs.map(blog => (
              <div key={blog.slug} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-tosca transition-colors cursor-pointer group">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-tosca transition-colors">{blog.title}</h3>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{blog.date}</span>
                </div>
                <p className="text-slate-600 text-sm">{blog.description}</p>
              </div>
            )) : (
              <p className="text-slate-500 italic">{lang === 'id' ? 'Memuat artikel...' : 'Loading articles...'}</p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-sm mt-auto">
        <p>&copy; 2026 Sebastian Vay Yosafat Pardamean Hutagalung.</p>
        <p className="mt-2 text-slate-400">GUI Mode Active. {lang === 'id' ? 'Tema Cerah' : 'Bright Theme'}.</p>
      </footer>
    </div>
  );
}
