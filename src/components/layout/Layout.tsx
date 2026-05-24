import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Users, Sparkles, Star } from 'lucide-react';

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Stories' },
    { path: '/yokai', label: 'Yōkai' },
    { path: '/quiz', label: 'Free Quiz' },
    { path: '/story-oracle', label: 'Story Oracle' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[var(--ink-deep)] text-[var(--text-primary)]" style={{ backgroundImage: 'radial-gradient(ellipse at 15% 20%, rgba(13, 16, 48, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, rgba(21, 24, 48, 0.4) 0%, transparent 50%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--ink-deep)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="container-archive">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* Ghost Icon - Stylized */}
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 4C11 4 4 13 4 22V34C4 35 5 36 6 36L10 32L14 36L18 32L20 36L22 32L26 36L30 32L34 36C35 36 36 35 36 34V22C36 13 29 4 20 4Z" fill="var(--crimson)" opacity="0.9"/>
                <circle cx="14" cy="18" r="3" fill="var(--bone-white)"/>
                <circle cx="26" cy="18" r="3" fill="var(--bone-white)"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-xl lg:text-2xl font-semibold tracking-wide text-[var(--text-primary)]">GhostingLeik</span>
                <span className="text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-[var(--gold-faded)]">Japanese Supernatural Archive</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[var(--gold-antique)] border-b border-[var(--gold-antique)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                to="/pricing"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 border border-[var(--crimson)] text-[var(--bone-white)] hover:bg-[var(--crimson)]"
              >
                <Star className="w-4 h-4" />
                <span>Join the Archive</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-[var(--border-subtle)]">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-medium tracking-wide transition-all ${
                      isActive(item.path)
                        ? 'text-[var(--gold-antique)] bg-[rgba(184,152,90,0.08)]'
                        : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium tracking-wide border border-[var(--crimson)] text-[var(--bone-white)] bg-[var(--crimson)]"
                  >
                    <Star className="w-4 h-4" />
                    Join the Archive
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--ink-black)] border-t border-[var(--border-subtle)] py-16">
        <div className="container-archive">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4C11 4 4 13 4 22V34C4 35 5 36 6 36L10 32L14 36L18 32L20 36L22 32L26 36L30 32L34 36C35 36 36 35 36 34V22C36 13 29 4 20 4Z" fill="var(--crimson)" opacity="0.9"/>
                  <circle cx="14" cy="18" r="3" fill="var(--bone-white)"/>
                  <circle cx="26" cy="18" r="3" fill="var(--bone-white)"/>
                </svg>
                <span className="font-display text-lg font-semibold">GhostingLeik</span>
              </Link>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-body">
                A curated archive of Japanese ghost stories, supernatural folklore, and strange legends from the land of the rising dead.
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold-faded)] mb-4">Explore</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Ghost Stories', path: '/stories' },
                  { label: 'Yōkai Encyclopedia', path: '/yokai' },
                  { label: 'Take the Quiz', path: '/quiz' },
                  { label: 'Story Oracle', path: '/story-oracle' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold-faded)] mb-4">Archive</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Membership', path: '/pricing' },
                  { label: 'Contact', path: '/contact' },
                  { label: 'Privacy Policy', path: '/privacy' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold-faded)] mb-4">Weekly Tales</h4>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                Receive a curated ghost story delivered to your inbox every week.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-archive text-sm flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium tracking-wide bg-[var(--crimson)] border border-[var(--crimson-dark)] text-[var(--bone-white)] hover:bg-[var(--crimson-light)] transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent mb-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} GhostingLeik.com. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <Link to="/privacy" className="hover:text-[var(--text-secondary)] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[var(--text-secondary)] transition-colors">Terms</Link>
              <span className="text-[var(--gold-faded)]">A Japanese Supernatural Archive</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;