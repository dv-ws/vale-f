import { BellRing, CloudSun, Leaf, LineChart, Sprout } from 'lucide-react';

const actionPills = ['Field Note', 'Weather Risk', 'Market Window', 'Crop Stage'];
const rows = [
  { crop: 'Saffron field', signal: 'Moisture watch', status: 'Check soil window' },
  { crop: 'Cherry block', signal: 'Moisture stress', status: 'Irrigation check' },
  { crop: 'Paddy field', signal: 'Water window', status: 'Plan today' }
];

export function FarmDashboard() {
  return (
    <div className="farm-dashboard w-full overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-3 shadow-dashboard backdrop-blur-2xl md:p-4">
      <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/80">
        <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 text-ink md:px-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white"><Leaf size={17} /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/40">Market Layer</p>
              <p className="text-sm font-semibold">Farm signals</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-cream px-3 py-2 text-[11px] font-semibold text-ink/55 sm:flex">
            ⌘K Search farm
          </div>
          <BellRing className="text-leaf" size={18} />
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[0.8fr_1.2fr] lg:p-5">
          <aside className="rounded-[1.25rem] bg-[#06170f] p-4 text-white">
            <p className="text-xs uppercase tracking-[0.26em] text-white/45">Today</p>
            <h3 className="mt-2 font-display text-4xl leading-none tracking-[-0.04em]">Farm signals</h3>
            <div className="mt-6 grid gap-3">
              {actionPills.map((pill) => (
                <span key={pill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/75">
                  {pill}
                </span>
              ))}
            </div>
          </aside>

          <main className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-mist p-4">
                <CloudSun className="text-leaf" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-ink/40">Weather</p>
                <p className="font-display text-3xl leading-none tracking-[-0.04em] text-ink">18°C</p>
              </div>
              <div className="rounded-[1.25rem] bg-cream p-4">
                <Sprout className="text-leaf" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-ink/40">Soil</p>
                <p className="font-display text-3xl leading-none tracking-[-0.04em] text-ink">Good</p>
              </div>
              <div className="rounded-[1.25rem] bg-moss/30 p-4">
                <LineChart className="text-leaf" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-ink/40">Market</p>
                <p className="font-display text-3xl leading-none tracking-[-0.04em] text-ink">Live</p>
              </div>
            </div>

            <div className="rounded-[1.25rem] bg-white p-4 ring-1 ring-ink/5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-bold text-ink">Recent field signals</p>
                <span className="rounded-full bg-leaf/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-leaf">Active</span>
              </div>
              <div className="grid gap-2 text-xs">
                {rows.map((row) => (
                  <div key={row.crop} className="grid grid-cols-[1fr_1fr] gap-2 rounded-2xl bg-mist/70 p-3 sm:grid-cols-[1fr_1fr_1fr]">
                    <span className="font-semibold text-ink">{row.crop}</span>
                    <span className="text-ink/55">{row.signal}</span>
                    <span className="font-semibold text-leaf">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
