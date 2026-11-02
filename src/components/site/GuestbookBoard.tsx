import React, { useState, useEffect } from 'react';

interface GuestbookEntry {
  id: string;
  name: string;
  location?: string;
  roleTag: string;
  date: string;
  message: string;
}

const DEFAULT_ENTRIES: GuestbookEntry[] = [
  {
    id: '1',
    name: 'Kenshi',
    location: 'Jakarta',
    roleTag: '[ Web Developer ]',
    date: '2026-10-23',
    message: 'Awesome retro personal site! Really nostalgic seeing classic tables and marquees again. Keep up the great frontend work!'
  },
  {
    id: '2',
    name: 'Yuki',
    location: 'Bandung',
    roleTag: '[ Fellow Otaku ]',
    date: '2026-10-22',
    message: 'Loved the Comipara 6 interactive map! The native JavaScript pathfinding algorithm is super smooth.'
  },
  {
    id: '3',
    name: 'Dimas',
    location: 'Yogyakarta',
    roleTag: '[ General Visitor ]',
    date: '2026-10-20',
    message: 'Greetings from Yogyakarta! Fantastic personal homepage layout. Good luck with your CS degree at UKRIM!'
  }
];

export default function GuestbookBoard() {
  const [entries, setEntries] = useState<GuestbookEntry[]>(DEFAULT_ENTRIES);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [roleTag, setRoleTag] = useState('[ General Visitor ]');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('rwbu_guestbook_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEntries(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      location: location.trim() || 'Cyberspace',
      roleTag,
      date: new Date().toISOString().split('T')[0],
      message: message.trim(),
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    try {
      localStorage.setItem('rwbu_guestbook_v1', JSON.stringify(updated));
    } catch {
      // Ignore storage limit
    }

    setName('');
    setLocation('');
    setMessage('');
    setIsSubmitting(false);
    setSuccessNotice(true);
    setTimeout(() => setSuccessNotice(false), 5000);
  };

  return (
    <div className="space-y-5">
      {/* Sign Form Box */}
      <div className="border-2 border-[#0b6e8a] bg-[#e0f4fa] p-5 text-sm space-y-4">
        <div className="font-bold text-base sm:text-lg text-[#0b6e8a] border-b border-[#0b6e8a] pb-2 flex items-center justify-between">
          <span>Sign RWBU's Visitor Guestbook</span>
          <span className="font-mono text-xs sm:text-sm font-bold text-[#5b3a9e]">
            Signatures: {entries.length}
          </span>
        </div>

        {successNotice && (
          <div className="p-2.5 border-2 border-[#1b7a3a] bg-[#e6f7ec] text-[#1b7a3a] font-bold font-mono text-sm">
            Notice: Your signature has been recorded in the guestbook archive!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#0b6e8a] mb-1 font-mono text-xs sm:text-sm">
                Your Name / Handle: *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Neo"
                className="w-full bg-white border-2 border-[#0b6e8a] px-3 py-1.5 text-sm text-[#222222] focus:outline-none focus:border-[#05485b]"
              />
            </div>
            <div>
              <label className="block font-bold text-[#0b6e8a] mb-1 font-mono text-xs sm:text-sm">
                Your Location / Origin:
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Jakarta, Indonesia"
                className="w-full bg-white border-2 border-[#0b6e8a] px-3 py-1.5 text-sm text-[#222222] focus:outline-none focus:border-[#05485b]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#0b6e8a] mb-1 font-mono text-xs sm:text-sm">
              Visitor Identity Tag:
            </label>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {[
                '[ General Visitor ]',
                '[ Web Developer ]',
                '[ Fellow Otaku ]',
                '[ Client / Recruiter ]',
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setRoleTag(tag)}
                  className={`px-2.5 py-1 text-xs font-bold border transition-colors cursor-pointer ${
                    roleTag === tag
                      ? 'bg-[#0b6e8a] text-white border-[#05485b]'
                      : 'bg-white text-[#0b6e8a] border-[#0b6e8a] hover:bg-[#cbeaf4]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#0b6e8a] mb-1 font-mono text-xs sm:text-sm">
              Guestbook Message / Note: *
            </label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a message, note, or just say hello..."
              className="w-full bg-white border-2 border-[#0b6e8a] p-3 text-sm text-[#222222] focus:outline-none focus:border-[#05485b] font-serif"
            />
          </div>

          <div className="flex items-center justify-between pt-1 font-mono">
            <span className="text-xs text-[#5b3a9e] italic">
              Saved locally to your browser session
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="icon-btn icon-btn-blue text-sm px-4 py-1.5 cursor-pointer bg-white"
            >
              <span>Add Signature to Guestbook</span>
            </button>
          </div>
        </form>
      </div>

      {/* Signatures Log */}
      <div className="space-y-3 pt-2">
        <div className="font-bold text-lg text-[#5b3a9e] border-b-2 border-[#5b3a9e] pb-1 uppercase tracking-wide">
          Recent Signatures &amp; Messages ({entries.length})
        </div>

        {entries.map((item) => (
          <table
            key={item.id}
            border={2}
            cellPadding={8}
            cellSpacing={0}
            width="100%"
            className="border-2 border-[#5b3a9e] bg-[#f0eaff] text-sm shadow-2xs"
          >
            <tbody>
              <tr>
                <td className="bg-white border-b border-[#5b3a9e] font-mono text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div>
                      <b className="text-[#222222] text-sm">{item.name}</b>
                      {item.location && (
                        <span className="text-[#5b3a9e]"> from {item.location}</span>
                      )}
                      <span className="ml-2 text-[#0b6e8a] font-bold">{item.roleTag}</span>
                    </div>
                    <span className="text-[#5b3a9e] font-bold">[{item.date}]</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm sm:text-base text-[#222222] leading-relaxed">
                  {item.message}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}
