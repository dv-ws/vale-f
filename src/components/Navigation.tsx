import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { brand, navItems } from '../data/content';

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/64 px-4 py-2.5 shadow-soft backdrop-blur-2xl md:px-6 md:py-3">
        <NavLink to="/" className="flex items-center gap-3 sm:gap-4" onClick={() => setOpen(false)}>
          <img src={brand.logo} alt="Vale Farm Kashmir logo" className="h-11 w-11 rounded-full bg-white object-contain p-1 ring-1 ring-ink/10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
          <div className="min-w-0 leading-none">
            <span className="font-display text-[1.45rem] tracking-[-0.05em] text-ink sm:text-[1.65rem] md:text-[1.9rem]">ValeFarm</span>
            <span className="ml-1 align-super text-[9px] font-bold text-leaf sm:text-[10px]">®</span>
            <p className="hidden text-[10px] font-bold uppercase tracking-[0.28em] text-ink/45 sm:block">Kashmir</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-[#6F6F6F] hover:text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`mailto:${brand.email}?subject=ValeFarm%20Kashmir%20Demo%20Request`}
            className="magnetic-button rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-glow"
          >
            Begin journey
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/60 bg-white/72 p-5 shadow-soft backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-black text-white' : 'text-ink/70 hover:bg-black/5'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`mailto:${brand.email}?subject=ValeFarm%20Kashmir%20Demo%20Request`}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              Begin journey
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
