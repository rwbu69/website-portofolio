export default function TerminalHeader() {
  return (
    <div className="bg-slate-950/50 border-b border-white/5 flex items-end pt-2 px-2 relative z-10 select-none">
      <div className="flex bg-slate-900 rounded-t-md px-4 py-2 text-xs text-slate-200 border-t border-x border-white/10 relative shadow-sm">
        <span className="text-tosca mr-2 font-bold">~</span> rwbu-portfolio
        <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-tosca"></div>
      </div>
      <div className="flex px-4 py-2 text-xs text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">
        +
      </div>
    </div>
  );
}
