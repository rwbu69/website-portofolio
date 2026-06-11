export const bootSequence = {
  id: [
    `<span class="text-green">[ OK ]</span> Memuat kernel sistem...`,
    `<span class="text-green">[ OK ]</span> Menginisialisasi modul VILT (Vue, Inertia, Laravel, Tailwind)...`,
    `<span class="text-green">[ OK ]</span> Mengaktifkan Astro static renderer...`,
    `<span class="text-yellow">[ INFO ]</span> Memuat data portofolio dari memori...`,
    `<span class="text-green">[ OK ]</span> Koneksi jaringan aman terjalin.`,
    `Bersiap membuka sesi interaktif...`
  ],
  en: [
    `<span class="text-green">[ OK ]</span> Loading system kernel...`,
    `<span class="text-green">[ OK ]</span> Initializing VILT module (Vue, Inertia, Laravel, Tailwind)...`,
    `<span class="text-green">[ OK ]</span> Enabling Astro static renderer...`,
    `<span class="text-yellow">[ INFO ]</span> Loading portfolio data from memory...`,
    `<span class="text-green">[ OK ]</span> Secure network connection established.`,
    `Preparing interactive session...`
  ]
};

const socialIconsHtml = `
<div class="flex gap-3 mt-4 mb-2">
  <a href="https://github.com/rwbu" target="_blank" class="text-slate-400 hover:text-tosca transition-colors flex items-center justify-center w-8 h-8 rounded border border-slate-700 hover:border-tosca" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
  <a href="#" class="text-slate-400 hover:text-pink transition-colors flex items-center justify-center w-8 h-8 rounded border border-slate-700 hover:border-pink" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></a>
  <a href="mailto:hello@rwbu.dev" class="text-slate-400 hover:text-tosca transition-colors flex items-center justify-center w-8 h-8 rounded border border-slate-700 hover:border-tosca" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg></a>
</div>
`;

export const welcomeMessage = {
  id: `<span class="text-tosca font-bold text-lg">Sebastian Vay Yosafat Pardamean Hutagalung | RWBU</span>
<span class="text-slate-300">Currently pursuing an informatics degree</span>

<span class="text-pink font-bold">[ HIGHLIGHTED PROJECTS ]</span>

<div class="flex gap-4 items-center mb-2 mt-2"><img src="/projects/1.webp" alt="eSPMI" class="w-[80px] h-[45px] object-cover rounded border border-tosca/30" /><div><span class="text-tosca font-bold">1. Aplikasi eSPMI (Sistem Penjaminan Mutu Internal)</span><br/><span class="text-slate-400 text-sm">Sistem informasi untuk instansi pendidikan.</span></div></div>
<div class="flex gap-4 items-center mb-2"><img src="/projects/3.webp" alt="Event Otaku" class="w-[80px] h-[45px] object-cover rounded border border-pink/30" /><div><span class="text-tosca font-bold">2. Platform Event Otaku (Geospatial Mapping)</span><br/><span class="text-slate-400 text-sm">Pemetaan event dengan fitur lokasi geospasial.</span></div></div>
<div class="flex gap-4 items-center mb-4"><div class="w-[80px] h-[45px] rounded border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-500 font-bold">CLI</div><div><span class="text-tosca font-bold">3. Astro Terminal Portfolio Engine</span><br/><span class="text-slate-400 text-sm">Terminal interaktif yang sedang Anda gunakan saat ini.</span></div></div>
${socialIconsHtml}
Ketik <span class="text-yellow">'help'</span> untuk mengeksplorasi perintah lainnya.`,
  
  en: `<span class="text-tosca font-bold text-lg">Sebastian Vay Yosafat Pardamean Hutagalung | RWBU</span>
<span class="text-slate-300">Currently pursuing an informatics degree</span>

<span class="text-pink font-bold">[ HIGHLIGHTED PROJECTS ]</span>

<div class="flex gap-4 items-center mb-2 mt-2"><img src="/projects/1.webp" alt="eSPMI" class="w-[80px] h-[45px] object-cover rounded border border-tosca/30" /><div><span class="text-tosca font-bold">1. eSPMI Application (Internal Quality Assurance System)</span><br/><span class="text-slate-400 text-sm">Information system for educational institutions.</span></div></div>
<div class="flex gap-4 items-center mb-2"><img src="/projects/3.webp" alt="Event Otaku" class="w-[80px] h-[45px] object-cover rounded border border-pink/30" /><div><span class="text-tosca font-bold">2. Otaku Event Platform (Geospatial Mapping)</span><br/><span class="text-slate-400 text-sm">Event mapping with geospatial location features.</span></div></div>
<div class="flex gap-4 items-center mb-4"><div class="w-[80px] h-[45px] rounded border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-500 font-bold">CLI</div><div><span class="text-tosca font-bold">3. Astro Terminal Portfolio Engine</span><br/><span class="text-slate-400 text-sm">The interactive terminal you are currently using.</span></div></div>
${socialIconsHtml}
Type <span class="text-yellow">'help'</span> to explore other commands.`
};

export const whoami = {
  id: `guest`,
  en: `guest`
};
