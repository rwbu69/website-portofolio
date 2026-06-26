import { about } from './about';
import { skills } from './skills';
import { projects, tools } from './projects';
import { contact } from './contact';
import { help } from './help';
import { bootSequence, welcomeMessage, whoami } from './system';

export type Language = 'en' | 'id';

const generateProjectList = (list: any[], lang: Language) => {
  if (list.length === 0) return lang === 'id' ? 'Belum ada proyek.' : 'No projects yet.';
  return list.map(p => `
<div class="mb-4">
  <span class="text-tosca font-bold">${p.title}</span> <span class="text-xs text-text-muted">[${p.status}]</span>
  <br>${p.description}
  <br><span class="text-text-muted">Stack:</span> ${p.tech.join(', ')}
  ${p.demoLink ? `<br><a href="${p.demoLink}" target="_blank" class="text-pink hover:underline">[Demo]</a>` : ''}
  ${p.repoLink ? `<br><a href="${p.repoLink}" target="_blank" class="text-pink hover:underline">[Source]</a>` : ''}
</div>
`).join('');
};

export const getTerminalData = (lang: Language): Record<string, string> => ({
  'help': help[lang],
  'about': about[lang],
  'skills': skills[lang],
  'projects': lang === 'id' 
    ? 'Kategori proyek tersedia:<br>- <span class="text-tosca">website</span>: Website dan web app<br>- <span class="text-tosca">tools-script</span>: CLI tools & script<br>Ketik <span class="text-tosca">projects [kategori]</span> untuk melihat.'
    : 'Available project categories:<br>- <span class="text-tosca">website</span>: Websites and web apps<br>- <span class="text-tosca">tools-script</span>: CLI tools & scripts<br>Type <span class="text-tosca">projects [category]</span> to view.',
  'projects website': generateProjectList(projects, lang),
  'projects tools-script': generateProjectList(tools, lang),
  'contact': contact[lang],
  'whoami': whoami[lang],
  'blog': lang === 'id' ? `Perintah tidak lengkap. Gunakan <span class="text-tosca">blog ls</span> untuk melihat daftar, atau <span class="text-tosca">blog read &lt;slug&gt;</span> untuk membaca.` : `Incomplete command. Use <span class="text-tosca">blog ls</span> to list, or <span class="text-tosca">blog read &lt;slug&gt;</span> to read.`,
  'blog ls': '',
  'lang en': lang === 'en' ? 'Language is already set to English.' : 'Language changed to English.',
  'lang id': lang === 'id' ? 'Bahasa sudah diatur ke Bahasa Indonesia.' : 'Bahasa diubah ke Bahasa Indonesia.',
  'gui': '',
  'clear': '',
});

export const getSystemData = (lang: Language) => ({
  bootSequence: bootSequence[lang],
  welcomeMessage: welcomeMessage[lang],
});
