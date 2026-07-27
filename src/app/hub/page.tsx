import HubNavigation from '@/components/HubNavigation';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  {
    title: 'RWA Intelligence',
    subtitle: 'Real-world asset analytics fused with market insight.'
  },
  {
    title: 'Forge Index',
    subtitle: 'Dynamic token index and premium asset trackers.'
  },
  {
    title: 'Agents & Arena',
    subtitle: 'Deploy avatars and engage in strategy across the metaverse.'
  },
  {
    title: 'Collateral Engine',
    subtitle: 'Optimized collateral flows for elite portfolio builders.'
  },
  {
    title: 'Academy',
    subtitle: 'Training protocols, lore archives, and knowledge grids.'
  },
  {
    title: 'Metaverse / Shadow Brickell',
    subtitle: 'Immersive cityscape access for premium stakeholders.'
  },
  {
    title: 'Guilds',
    subtitle: 'Collaboration nodes for elite networks and alliances.'
  },
  {
    title: 'Atelier (Fashion)',
    subtitle: 'Curated fashion labs for style-driven identity and collectible design.'
  }
];

export default function HubPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-[#f3e5ab]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.08),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(243,229,171,0.06),_transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8">
        <HubNavigation />
        <section className="mt-12 rounded-[28px] border border-[#d4af37]/10 bg-[#13131f]/95 p-8 shadow-[0_25px_90px_-36px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-[#a1a1aa]">welcome back, operator</p>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-[#f3e5ab]">Hub Command Center</h1>
              <p className="max-w-2xl text-base leading-7 text-[#a1a1aa]">
                Navigate the fractured network and access powerful modules designed for elite builders, analysts, and guardians of the system.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-surface border-[#d4af37]/10 bg-[#13131f]/95 p-5 shadow-[0_30px_60px_-40px_rgba(212,175,55,0.14)]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#a1a1aa]">System Status</p>
                    <span className="rounded-full border border-[#d4af37]/15 bg-[#0f111a]/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-[#f3e5ab]">Live</span>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-[#f3e5ab]">All nodes stable</p>
                  <p className="mt-2 text-sm text-[#a1a1aa]">Current flow: 98.7% uptime · latency nominal · vault green.</p>
                </div>
                <div className="card-surface border-[#d4af37]/10 bg-[#13131f]/95 p-5 shadow-[0_30px_60px_-40px_rgba(212,175,55,0.14)]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#a1a1aa]">Access Level</p>
                    <span className="rounded-full border border-[#d4af37]/15 bg-[#0f111a]/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-[#f3e5ab]">Tier 1</span>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-[#f3e5ab]">Tier 1 / Synapse</p>
                  <p className="mt-2 text-sm text-[#a1a1aa]">Authorized for Forge Index, RWA Intelligence, and Academy vaults.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#d4af37]/10 bg-[#13131f]/95 p-8 shadow-[0_0_80px_rgba(212,175,55,0.16)]">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-[#a1a1aa]">Quick access</p>
                <h2 className="text-3xl font-semibold text-[#f3e5ab]">Command Interface</h2>
                <p className="text-sm leading-6 text-[#a1a1aa]">
                  Every module is a distinct portal within the hub. Hover to reveal the gold pulse and move through the network with precision.
                </p>
                <div className="mt-6 space-y-3 rounded-3xl border border-[#d4af37]/10 bg-[#0f111a]/80 p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#a1a1aa]">Pulse</p>
                  <div className="h-2 overflow-hidden rounded-full bg-[#111827]/90">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.24)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="mt-12">
          <div className="mb-8 flex flex-col gap-4 rounded-[24px] border border-[#d4af37]/10 bg-[#13131f]/95 p-6 shadow-[0_30px_70px_-38px_rgba(212,175,55,0.14)] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#a1a1aa]">Modules</p>
              <h2 className="text-4xl font-semibold text-[#f3e5ab]">Operational Grid</h2>
            </div>
            <div className="rounded-[20px] border border-[#d4af37]/10 bg-[#0f111a]/90 px-5 py-3 text-sm uppercase tracking-[0.24em] text-[#f3e5ab] shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              Live · Premium network latency optimized
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <ModuleCard key={module.title} title={module.title} subtitle={module.subtitle} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
