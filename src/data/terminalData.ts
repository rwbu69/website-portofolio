import { about } from './about';
import { skills } from './skills';
import { projectsPrompt, projectsWebsite, projectsTools } from './projects';
import { contact } from './contact';
import { help } from './help';
import { bootSequence, welcomeMessage, whoami } from './system';

export type Language = 'en' | 'id';

export const getTerminalData = (lang: Language): Record<string, string> => ({
  'help': help[lang],
  'about': about[lang],
  'skills': skills[lang],
  'projects': projectsPrompt[lang],
  'projects website': projectsWebsite[lang],
  'projects tools-script': projectsTools[lang],
  'contact': contact[lang],
  'whoami': whoami[lang],
  'blog': lang === 'id' ? `Perintah tidak lengkap. Gunakan <span class="text-tosca">blog ls</span> untuk melihat daftar, atau <span class="text-tosca">blog read &lt;slug&gt;</span> untuk membaca.` : `Incomplete command. Use <span class="text-tosca">blog ls</span> to list, or <span class="text-tosca">blog read &lt;slug&gt;</span> to read.`,
  'blog ls': '',
  'lang en': lang === 'en' ? 'Language is already set to English.' : 'Language changed to English.',
  'lang id': lang === 'id' ? 'Bahasa sudah diatur ke Bahasa Indonesia.' : 'Bahasa diubah ke Bahasa Indonesia.',
  'clear': '',
});

export const getSystemData = (lang: Language) => ({
  bootSequence: bootSequence[lang],
  welcomeMessage: welcomeMessage[lang],
});
