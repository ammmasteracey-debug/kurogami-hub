'use client';

import Link from 'next/link';

const navItems = [
  { title: 'Overview', href: '#overview' },
  { title: 'Modules', href: '#modules' },
  { title: 'Academy', href: '#academy' }
];

const HubNavigation = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d4af37]/10 bg-[#0a0a0f]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-[#d4af37]/15 bg-[#13131f] shadow-[0_0_24px_rgba(212,175,55,0.2)]">
            <span className="text-lg font-semibold tracking-[0.18em] text-[#d4af37]">K</span>
          </div>
          <div className="hidden md:inline-block">
            <span className="degen-badge">DEGEN</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a1a1aa]">Kurogami Hub</p>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f3e5ab]">Premium Operations</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-[0.24em] text-[#a1a1aa] transition hover:text-[#f3e5ab]">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button className="button-primary">Connect Wallet</button>
        </div>
      </div>
    </header>
  );
};

export default HubNavigation;
